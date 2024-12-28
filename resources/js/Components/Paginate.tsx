import { Link } from "@inertiajs/react";

export default function Paginate({ links }) {


    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white";
        } else {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    return (
        links?.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap mt-8">
                    {links.map((link, index:number) =>
                        link.url === null ? (
                            <div className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded" key={index}>
                                {link.label}
                            </div>
                        ) : (
                            <Link
                                className={getClassName(link.active)}
                                href={link.url}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </div>
            </div>
        )
    );
}
