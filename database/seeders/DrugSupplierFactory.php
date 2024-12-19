<?php

namespace Database\Seeders;

use App\Models\DrugSupplier;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DrugSupplierFactory extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DrugSupplier::factory()->count(25)->create();
    }
}
