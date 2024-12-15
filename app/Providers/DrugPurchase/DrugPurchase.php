<?php

namespace App\Providers\DrugPurchase;

use App\Repositories\DrugInventory\DrugPurchaseRepository;
use App\Repositories\DrugPurchaseRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class DrugPurchase extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(DrugPurchaseRepositoryInterface::class, DrugPurchaseRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
