<?php

namespace App\Providers\DrugSale;

use App\Repositories\DrugInventory\DrugSaleRepository;
use App\Repositories\DrugSaleRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class DrugSale extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(DrugSaleRepositoryInterface::class, DrugSaleRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
