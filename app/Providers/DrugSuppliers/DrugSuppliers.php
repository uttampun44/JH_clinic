<?php

namespace App\Providers\DrugSuppliers;

use App\Repositories\DrugInventory\DrugSupplierRepository;
use App\Repositories\DrugSupplierInterface;
use Illuminate\Support\ServiceProvider;

class DrugSuppliers extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(DrugSupplierInterface::class, DrugSupplierRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
