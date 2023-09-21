<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\CategoryVacancy;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            CitiesSeed::class,
            VacancySeeder::class,
            CategorySeeder::class,
            CategoryVacancySeeder::class,
            CompanySeeder::class,
            // ReviewsOfCompanySeeder::class,

        ]);
    }
}
