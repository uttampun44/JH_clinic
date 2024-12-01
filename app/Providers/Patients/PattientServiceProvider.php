<?php

namespace App\Providers\Patients;

use App\Repositories\PatientRepositoryInterface;
use App\Repositories\Patients\PatientRepository;
use Illuminate\Support\ServiceProvider;

class PattientServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(PatientRepositoryInterface::class, PatientRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
