<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\resume>
 */
class ResumeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'profession' => $this->faker->word(),
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'gender' => 'Мужской',
            'region' => $this->faker->country(),
            'date_of_birth' => $this->faker->date('Y-m-d'),
            'phone' => $this->faker->phoneNumber(),
            'citizenship' => 'USA',
            'work_permit' => 'USA',
            'education' => 'Высшее образование',
            'experience' => 'менее года',
            'skills' => ['Economy'],
            'educational_institute' => [],
            'companies' => [],
            'salary' => $this->faker->numberBetween(20000, 250000),
            'employment_type' => 'Удаленая работа',
            'schedule_type' => 'Полная занятость',
            'relocation' => 'Возможно',
            'buisness_travel' => 'Готов',
            'about_me' => 'Some text  about yourself'
        ];
    }
}
