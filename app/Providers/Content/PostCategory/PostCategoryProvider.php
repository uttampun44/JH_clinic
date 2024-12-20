<?php

namespace App\Providers\Content\PostCategory;

use App\Repositories\Content\PostCategoryRepository;
use App\Repositories\PostCategoryRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class PostCategoryProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(PostCategoryRepositoryInterface::class, PostCategoryRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
