<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Doctor>
 */
class DoctorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => $this->faker->name(),
            'last_name' => $this->faker->lastName(),
            'specialization' => $this->faker->randomElement(['Orthapedic', 'Cardiologists', 'Pediatritics', 'Dermatalogists', 'Gastroenterologist', 'Neurologist',
            'Psychiatrist', 'Anesthesiologist']),
             'gender' => $this->faker->randomElement(['Male', 'Female', 'Other']),
             'contact_number' => $this->faker->phoneNumber(),
             'address' => $this->faker->address(),
        ];
    }
}
