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
                'name' => fake()->company,
                'email' => fake()->safeEmail,
                'website' => fake()->url,
                'phone_number' => fake()->phoneNumber,
                'address' =>  fake()->address,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
        return $response;
    }
}
