<?php

namespace App\Http\Middleware;

use App\Models\Permission;
use App\Models\Role;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class RolePermissionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $user = Auth::user();


        $superRoles = ['Super Admin', 'Admin'];
       

        if (!$user) {
            return response()->json(['message' => 'User is not authenticated'], 401);
        }
        
        if(!$user->roles)
        {
            return response()->json(['message' => 'User does not have a role'], 401);
        }

        if (!in_array($user->roles, $superRoles)) {
           
            $permissions = explode('|', $permission);

            if (!$user->permissions()->whereIn('name', $permissions)->exists()) {
                return response()->json(['message' => 'Sorry! You have no permission to perform this action'], 403);
            }
        }

        return $next($request);


    }
}
