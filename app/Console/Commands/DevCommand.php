<?php

namespace App\Console\Commands;

use App\Http\Controllers\CandidateConditionController;
use App\Http\Controllers\ProfileController;
use App\Models\SqlBuild;
use App\Models\UserResponseVacancies;
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
        UserResponseVacancies::create(['user_id' => 20, 'vacancy_id' => 2]);
        UserResponseVacancies::create(['user_id' => 20, 'vacancy_id' => 4]);
        UserResponseVacancies::create(['user_id' => 20, 'vacancy_id' => 7]);
        UserResponseVacancies::create(['user_id' => 20, 'vacancy_id' => 8]);
        UserResponseVacancies::create(['user_id' => 20, 'vacancy_id' => 12]);
    }

}
