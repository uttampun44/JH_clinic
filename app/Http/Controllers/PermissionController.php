<?php

namespace App\Http\Controllers;

use App\Models\RolePermission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PermissionController extends Controller
{
    public function storePermisson(Request $request)
    {
       try {
        $permission = RolePermission::create([
            'role_id' => $request->role_id,
            'permission_id' => $request->permission_id,
        ]);

        return to_route('permissions.index')->with('success', 'Permission created successfully!');
       } catch (\Throwable $th) {
         Log::error('Failed to create permission', [
           'error' => $th->getMessage(),
           'trace' => $th->getTraceAsString(),
           'data' => $request->all(),   
         ]);
       }
    }
}
