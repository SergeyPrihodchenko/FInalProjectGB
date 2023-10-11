<?php

namespace Database\Seeders;

use App\Enums\StatusResponse as EnumsStatusResponse;
use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusResponse extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = EnumsStatusResponse::all();

        foreach ($statuses as $value) {
            Status::create(['title' => $value]);
        }
    }
}
