<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

class ReviewsOfCompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('reviews_of_companies')->insert($this->getData());
    }


    public function getData(): array
    {

        $response = [];
        for ($i = 0; $i < 10; $i++) {
            $response[] = [
                'company_id' => Company::create([
                    'name' => fake('ru_RU')->company,
                ])->id,
                'user_id' => User::create([
                    'name' => fake('ru_RU')->name,
                    'email' => fake()->email,
                    'password' => '12345678',
                ])->id,
                'content' => fake('ru_RU')->text,
                'rating' => fake()->numberBetween(1, 5),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
        return $response;
    }
}
