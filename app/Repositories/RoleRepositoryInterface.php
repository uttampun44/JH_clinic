<?php

namespace App\Repositories;

use App\Models\Role;
use App\Models\RolePermission;

interface RoleRepositoryInterface
{
    public function getRoles();

    public function editShow($id);


    public function storeOrUpdateRole(array $data): RolePermission;
}
