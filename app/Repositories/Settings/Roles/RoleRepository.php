<?php

namespace App\Repositories\Settings\Roles;

use App\Models\Role;
use App\Repositories\RoleRepositoryInterface;

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
    }

    public function storeRoleStore(array $data): Role
    {
      return  $this->data->create($data);

    }

    public function editRole(Role $role): Role
    {
        return $role;
    }

    public function updateRole(Role $role, array $data): bool
    {
        return $this->role->update( $data);
    }

    public function deleteRole(Role $role)
    {
        return $role->delete($role);
    }
}
