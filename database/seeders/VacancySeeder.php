<?php

namespace Database\Seeders;

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

    public function getData()
    {
        $data = [];
        for ($i = 0; $i < 100; $i++) {
            $data[] = [
                'title' => fake('ru_RU')->jobTitle(),
                'payment' => fake()->numberBetween(1000,12000),
                'experience' => fake()->numberBetween(0,20),

            ];
        }

        return $data;
    }
}
