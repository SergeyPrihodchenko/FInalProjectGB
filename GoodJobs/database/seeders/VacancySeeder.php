<?php

namespace Database\Seeders;

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

                'title' => fake()->jobTitle(),
                'payment' => fake()->numberBetween(0,1200),
                'experience' => fake()->numberBetween(0,100),
                'company_id' => Company::create(['name'=>fake()->company])->id,

                

            ];
        }

        return $data;
    }
}
