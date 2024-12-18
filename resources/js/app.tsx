import '../css/app.css';
import "../css/index.css";
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import AuthProvider from './Context/ContextProvider';
import { Toaster } from 'sonner';

const appName = import.meta.env.VITE_APP_NAME || 'Jh_clinic';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el, <App {...props} />);
            return;
        }

        createRoot(el).render(<AuthProvider>
            <App {...props} />
            <Toaster position='top-right' />
        </AuthProvider>);
    },
    progress: {
        color: '#4B5563',
    },
});
