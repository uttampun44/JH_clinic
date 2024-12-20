<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::insert([
            ['name' => 'view-dashboard', 'guard_name' => 'web'],
            ['name' => 'view-patient-list', 'guard_name' => 'web'],
            ['name' => 'view-doctor-list', 'guard_name' => 'web'],
            ['name' => 'appointment-list', 'guard_name' => 'web'],
            ['name' => 'view-inventory', 'guard_name' => 'web'],
            ['name' => 'view-settings', 'guard_name' => 'web'],
        ]);
    }
}
