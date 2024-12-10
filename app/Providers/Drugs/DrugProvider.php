<?php

namespace App\Providers\Drugs;

use App\Models\Drug;
use App\Repositories\DrugInventory\DrugsRepository;
use App\Repositories\DrugsRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class DrugProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(DrugsRepositoryInterface::class, DrugsRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
