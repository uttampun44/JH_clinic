<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::insert(
           [
            ['name' => 'super admin', 'guard_name' => 'web'],
            ['name' => 'admin', 'guard_name' => 'web'],
            ['name' => 'patient', 'guard_name' => 'web'],
            ['name' => 'doctor', 'guard_name' => 'web'],
           ]
        );
    }
}
