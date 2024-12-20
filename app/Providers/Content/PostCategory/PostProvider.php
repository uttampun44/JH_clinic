<?php

namespace App\Providers;

use App\PostRepository;
use App\Repositories\PostRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class PostProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(PostRepositoryInterface::class, PostRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
