<?php

namespace App\Console\Commands;

use App\Http\Controllers\CandidateConditionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatusResponseResumeController;
use App\Http\Controllers\Vacancy\AcceptVacancyController;
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
    }

}
