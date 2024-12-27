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

        if(isset($data['role_id']) && isset($data['permission_id'])){
             {
            RolePermission::updateOrCreate(
                [
                    'role_id' => $data['role_id'],
                    'permission_id' => $data['permission_id'], 
                ],
                
            );
           
        }
      }
      return  $this->role->create($data);
    }

    public function editShow($id)
    {

        return Permission::select('id', 'name', 'display_name')->get();

    }

}
