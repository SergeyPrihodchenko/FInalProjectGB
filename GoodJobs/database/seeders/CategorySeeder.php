<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert($this->getData());
    }

    public function getData()
    {
        $data = [['title' => 'удаленая работа'], ['title' => 'сдельная работа'], ['title' => 'полный рабочий день']];

        return $data;
    }
}
