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
        $data = [];
        for ($i = 0; $i < 3; $i++) {
            $data[] = [
                'title' => 'category: '.$i
            ];
        }

        return $data;
    }
}
