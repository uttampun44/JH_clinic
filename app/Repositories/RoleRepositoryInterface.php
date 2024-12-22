<?php

namespace App\Repositories;

use App\Models\Role;

interface RoleRepositoryInterface
{
    public function getRoles();

    public function storeRoleStore(array $data): Role;

    public function editRole(Role $role): Role;

    public function updateRole(Role $role, array $data): bool;

    public function deleteRole(Role $role);
}
