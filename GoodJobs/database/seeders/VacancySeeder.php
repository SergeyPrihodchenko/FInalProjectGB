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
        for ($i = 0; $i < 10; $i++) {
            $data[] = [
                'title' => fake()->jobTitle(),
                'payment' => fake()->numberBetween(30000, 100000),
                'experience' => fake()->numberBetween(1,3)
            ];
        }

        return $data;
    }
}
