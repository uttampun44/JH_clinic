<?php

namespace App\Http\Controllers\Settings\Role;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Repositories\RoleRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function __construct(public RoleRepositoryInterface $roleRepositoryInterface)
    {
        $this->roleRepositoryInterface = $roleRepositoryInterface;
    }

    public function getRoles()
    {
        $datas = $this->roleRepositoryInterface->getRoles();

        return Inertia::render('Settings/Roles/Index', compact('datas'));
    }

    public function editRolesAndPermissions($id)
    {

        $role = Role::findOrFail($id);

        $datas = $this->roleRepositoryInterface->editShow($id);

       return Inertia::render('Settings/Roles/Edit', compact('datas', 'role'));
    }

   public function storeOrUpdateRole(Request $request)
   {
      try {
        $this->roleRepositoryInterface->storeOrUpdateRole($request->all());
      } catch (\Throwable $th) {
         Log::info('Error while Creating or Updating Role' . $th->getMessage());
      }
   }
}
