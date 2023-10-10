<?php

namespace Database\Seeders;

use App\Enums\BuisnessTravelStatus;
use App\Enums\EducationLevel;
use App\Enums\EmploymentType;
use App\Enums\Experience;
use App\Enums\GenderType;
use App\Enums\RelocationStatus;
use App\Enums\ScheduleType;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ResumeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('resumes')->insert($this->getData());
    }

    protected function getData(): array
    {
        $data = [];

        $n = 0;
        $e = 0;
        $k = 0;
        $j = 0;
        $s = 0;
        $r = 0;
        $t = 0;

        $gender = GenderType::getAll();
        $education = EducationLevel::getAll();
        $experience = Experience::all();
        $employment = EmploymentType::all();
        $schedule = ScheduleType::all();
        $relocation = RelocationStatus::getAll();
        $buisnessTravel = BuisnessTravelStatus::getAll();

        for ($i = 0; $i < 10; $i++){
            
            $n = rand(0, 1);

            $e = rand(0, 7);

            $k = rand(0, 3);

            $j = rand(0, 4);

            $s = rand(0, 4);

            $r = rand(0, 2);

            $t = rand(0, 2);

            $data[] = [
                'user_id' => User::create([
                    'name' => fake('ru_RU')->name,
                    'email' => fake('ru_RU')->email,
                    'password' => 'qwerty123'
                ])->id,
                'profession' => fake('ru_RU')->jobTitle,
                'first_name' => fake('ru_RU')->firstName,
                'last_name' => fake('ru_RU')->lastName,
                'gender' => $gender[$n],
                'region' => fake('ru_RU')->country,
                'date_of_birth' => fake('ru_RU')->date,
                'phone' => fake('ru_RU')->phoneNumber,
                'citizenship' => fake('ru_RU')->country,
                'work_permit' => fake('ru_RU')->country,
                'education' => $education[$e],
                'skills' => json_encode(fake('ru_RU')->jobTitle),
                'educational_institute' =>json_encode([
                    [
                        'title' => fake('ru_RU')->title,
                        'faculty' => fake('ru_RU')->title,
                        'specialization' => fake('ru_RU')->title,
                        'start_year' => fake('ru_RU')->date,
                        'graduation_year' => fake('ru_RU')->date,
                    ]
                ]),
                'experience' => $experience[$k],
                'salary' => rand(10000, 250000),
                'employment_type' => $employment[$j],
                'schedule_type' => $schedule[$s],
                'relocation' => $relocation[$r],
                'buisness_travel' => $buisnessTravel[$t],
                'about_me' => fake('ru_RU')->text(200)
            ];
        }

        return $data;
    }
}
