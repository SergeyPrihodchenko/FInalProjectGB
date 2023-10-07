<?php

namespace Database\Seeders;

use App\Enums\EmploymentType;
use App\Enums\Experience;
use App\Enums\ScheduleType;
use App\Models\City;
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
        $r = 0;
        $employment = EmploymentType::all();
        $schedule = ScheduleType::all();
        $experience = Experience::all();

        for ($i = 0; $i < 30; $i++) {
            $n = rand(0, 4);
            $y = rand(0, 4);
            $k = rand(0, 3);
            $r = rand(0, 200);
            $data[] = [
                'title' => fake('ru_RU')->jobTitle,
                'payment' => fake()->numberBetween(1000, 12000),
                'employment' => $employment[$n],
                'schedule' => $schedule[$y],
                'experience' => $experience[$k],
                'description' => fake('ru_RU')->text(),
                'contacts' => json_encode(fake()->phoneNumber()),
                'requirements' => json_encode(fake('ru_RU')->text),
                'responsibilities' => json_encode(fake('ru_RU')->text),
                'conditions' => fake('ru_RU')->text,
                'skills' => json_encode(fake('ru_RU')->jobTitle),
                'reviews' => json_encode(fake('ru_RU')->jobTitle),
                'company_id' => Company::create([
                    'name' => fake('ru_RU')->company,
                ])->id,
                'city_id' => $r,
                // 'city_id' => City::create([
                //     'title' => 'Фэйковая город проживания'
                // ])->id,
                'city_work_id' => $r
            ];
        }

        return $data;
    }
}
