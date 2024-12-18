<?php

namespace Database\Seeders;

use App\Models\DrugCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DrugCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DrugCategory::insert([
            ['name' => 'Antibiotics', 'description' => 'Used to treat bacterial infections'],
            ['name' => 'Analgesics', 'description' => 'Pain relievers'],
            ['name' => 'Antipyretics', 'description' => 'Used to reduce fever'],
            ['name' => 'Antihistamines', 'description' => 'Used to treat allergic reactions'],
            ['name' => 'Vitamins', 'description' => 'Used to supplement nutritional intake'],
            ['name' => 'Hormones', 'description' => 'Used for regulating bodily functions'],
            ['name' => 'Anticoagulants', 'description' => 'Used to prevent blood clots'],
            ['name' => 'Steroids', 'description' => 'Used to reduce inflammation'],
        ]);
    }
}
