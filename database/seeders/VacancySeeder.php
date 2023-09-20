<?php

namespace Database\Seeders;

use App\Enums\EmploymentType;
use App\Enums\Experience;
use App\Enums\ScheduleType;
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
        $n = 0;
        $k = 0;
        $y = 0;
        $employment = EmploymentType::all();
        $schedule = ScheduleType::all();
        $experience = Experience::all();
        for ($i = 0; $i < 30; $i++) {
            $n = rand(0, 4);
            $y = rand(0, 4);
            $k = rand(0, 3);
            $data[] = [
                'title' => fake('ru_RU')->jobTitle,
                'payment' => fake()->numberBetween(1000, 12000),
                'employment' => $employment[$n],
                'schedule' => $schedule[$y],
                'experience' => $experience[$k],
                'description' => fake('ru_RU')->text(),
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
