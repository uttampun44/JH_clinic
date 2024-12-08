<?php

namespace App\Providers\DrugCategory;

use App\Repositories\DrugCategoryRepositoryInterface;
use App\Repositories\DrugInventory\DrugCategoryRepository;
use Illuminate\Support\ServiceProvider;

class DrugCategoryProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(DrugCategoryRepositoryInterface::class, DrugCategoryRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
