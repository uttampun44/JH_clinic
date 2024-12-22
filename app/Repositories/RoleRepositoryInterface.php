<?php

namespace App\Repositories;

use App\Models\Role;

interface RoleRepositoryInterface
{
    public function getRoles();

    public function editShow();


    public function storeOrUpdateRole(array $data): Role;
}
