<?php

namespace Database\Seeders;

use App\Models\User;
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
                'business_profile' =>  fake('ru_RU')->companySuffix,
                'website' => fake()->url,
                'region_of_location' => fake('ru_RU')->address,
                'date_create' => fake('ru_RU')->date,
                'phone_number' => fake()->phoneNumber,
                'description' => fake('ru_RU')->text(),
                'creator_id' => User::create([
                    'name' => fake('ru_RU')->name,
                    'email' => fake()->email,
                    'password' => '12345678',
                ])->id,

                'city' => fake('ru_RU')->city,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
        return $response;
    }
}
