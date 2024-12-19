<?php

namespace Database\Factories;

use App\Models\Doctor;
use App\Models\DrugCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Drug>
 */
class DrugFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
                'sku' => $this->faker->unique()->uuid(), 
                'description' => $this->faker->sentence(),
                'manufacturer' => $this->faker->company(), 
                'dosage_from' => $this->faker->randomDigitNotNull(), 
                'strength' => $this->faker->word(),
                'expiration_date' => $this->faker->date(), 
                'drug_category_id' => DrugCategory::inRandomOrder()->first()->id, 
        ];
    }
}
