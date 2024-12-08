<?php

namespace App\Providers\Appointments;

use App\Repositories\AppointmentRepositoryInterface;
use App\Repositories\Appointments\AppointmentRepository;
use Illuminate\Support\ServiceProvider;

class AppointmentProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(AppointmentRepositoryInterface::class, AppointmentRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
