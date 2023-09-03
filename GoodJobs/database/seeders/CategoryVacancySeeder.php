<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Vacancy;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryVacancySeeder extends Seeder
{
    public function run()
    {
        $categories = Category::all();

        Vacancy::all()->each(function ($vacancy) use ($categories){
            $vacancy->categories()->attach(
                $categories->random(1)->pluck('id')
            );
        });
    }
}
