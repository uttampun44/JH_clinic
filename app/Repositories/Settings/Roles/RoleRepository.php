<?php

namespace App\Repositories\Settings\Roles;

use App\Models\Permission;
use App\Models\Role;
use App\Models\RolePermission;
use App\Repositories\RoleRepositoryInterface;
use Inertia\Inertia;

class RoleRepository implements RoleRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct(public Role $role)
    {

    }

    public function getRoles()
    {
        $roles = Role::select('id', 'name')->get();


        return [
            'roles' => $roles
        ];
    }

    public function storeOrUpdateRole(array $data): RolePermission
    {
        dd($data);
        
      return  $this->role->create($data);
    }

    public function editShow($id)
    {

        return Permission::select('id', 'name', 'display_name')->get();

    }

}
