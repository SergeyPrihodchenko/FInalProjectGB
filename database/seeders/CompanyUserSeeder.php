<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompanyUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('company_user')->insert($this->getData());
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
            ];
        }
        return $response;
    }
}
