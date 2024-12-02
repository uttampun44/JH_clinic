<?php

namespace App\Providers\Doctors;

use App\Repositories\DoctorRepositoryInterface;
use App\Repositories\Doctors\DoctorRepository;
use Illuminate\Support\ServiceProvider;

class DorctorServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(DoctorRepositoryInterface::class, DoctorRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
