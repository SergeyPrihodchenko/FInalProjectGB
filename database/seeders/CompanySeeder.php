<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('companies')->insert($this->getData());
    }

    public function getData(): array
    {
        $response = [];
        for ($i = 0; $i < 10; $i++) {
            $response[] = [
                'email' => fake()->safeEmail,
                'name' => fake('ru_RU')->company,
                'business_profile' =>  fake('ru_RU')->title,
                'website' => fake()->url,
                'region_of_location' => fake('ru_RU')->city,
                'date_create' => fake('ru_RU')->date,
                'phone_number' => fake()->phoneNumber,
                'description' => fake('ru_RU')->text(),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
        return $response;
    }
}
