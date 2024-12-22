<?php

namespace App\Providers\Settings\Roles;

use App\Repositories\RoleRepositoryInterface;
use App\Repositories\Settings\Roles\RoleRepository;
use Illuminate\Support\ServiceProvider;

class RoleProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(RoleRepositoryInterface::class, RoleRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
