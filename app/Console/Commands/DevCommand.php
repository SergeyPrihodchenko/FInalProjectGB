<?php

namespace App\Console\Commands;

use App\Http\Controllers\ProfileController;
use App\Models\SqlBuild;
use App\Models\User_click_vacancy;
use App\Models\User_like_vacancy;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class DevCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'devStart';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        User_click_vacancy::create(['user_id' => 1, 'vacancy_id' => 2]);
        User_click_vacancy::create(['user_id' => 1, 'vacancy_id' => 4]);
        User_click_vacancy::create(['user_id' => 1, 'vacancy_id' => 7]);
        User_click_vacancy::create(['user_id' => 1, 'vacancy_id' => 9]);
        User_click_vacancy::create(['user_id' => 1, 'vacancy_id' => 12]);
    }

}
