<?php

namespace Database\Seeders;

use App\Enums\EmploymentType;
use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VacancySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('vacancies')->insert($this->getData());
    }

    public function getData(): array
    {
        $data = [];
        for ($i = 0; $i < 100; $i++) {
            $data[] = [

                'title' => fake('ru_RU')->jobTitle,
                'payment' => fake()->numberBetween(1000, 12000),
                'employment' => EmploymentType::fullTimeJob->value,
                'description' => fake('ru_RU')->text(),
                'experience' => fake()->numberBetween(0, 10),
                'contacts' => fake()->phoneNumber(),
                'requirements' => fake('ru_RU')->text,
                'responsibilities' => fake('ru_RU')->text,
                'conditions' => fake('ru_RU')->company,
                'skills' => fake('ru_RU')->jobTitle,
                'reviews' => fake('ru_RU')->jobTitle,
                'company_id' => Company::create([
                    'name' => fake('ru_RU')->company,
                ])->id,

                

            ];
        }

        return $data;
    }
}
