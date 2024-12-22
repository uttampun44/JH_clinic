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
            ['name' => 'view-dashboard', 'display_name' => 'Dashboard', 'guard_name' => 'web'],
            ['name' => 'view-patient-list', 'display_name' => 'Patient List', 'guard_name' => 'web'],
            ['name' => 'view-doctor-list', 'display_name' => 'Doctor List', 'guard_name' => 'web'],
            ['name' => 'appointment-list', 'display_name' => 'Appointment List', 'guard_name' => 'web'],
            ['name' => 'view-inventory', 'display_name' => 'Inventory', 'guard_name' => 'web'],
            ['name' => 'view-settings', 'display_name' => 'Settings', 'guard_name' => 'web'],
        ]);
    }
}
