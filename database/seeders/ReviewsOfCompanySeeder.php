<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
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
                'user_id' => Company::create([
                    'name' => fake('ru_RU')->user,
                ])->id,
                'name' => fake('ru_RU')->firstName,
                'review' => fake('ru_RU')->text,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
        return $response;
    }
}
