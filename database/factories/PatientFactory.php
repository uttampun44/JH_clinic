<?php

namespace Database\Factories;

use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Patient>
 */
class PatientFactory extends Factory
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
          'date_of_birth' => $this->faker->date(),
           'gender' => $this->faker->randomElement(['Male', 'Female', 'Other']),
           'contact_number' => $this->faker->phoneNumber(),
           'address' => $this->faker->address(),
        ];
    }
}
