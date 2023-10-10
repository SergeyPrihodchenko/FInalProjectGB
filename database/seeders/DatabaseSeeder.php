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
        // \App\Models\Subscription::factory(10)->create();

        // \App\Models\Subscription::factory()->create([
        //     'name' => 'Test Subscription',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            CitiesSeed::class,
            CategorySeeder::class,
            CategoryVacancySeeder::class,
            CompanySeeder::class,
            CompanyUserSeeder::class,
            VacancySeeder::class,
            StatusResponse::class
            // ReviewsOfCompanySeeder::class,

        ]);
    }
}
