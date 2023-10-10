<?php

namespace App\Http\Controllers;

use App\Models\StatusResumeVacancy;
use Illuminate\Http\Request;

class StatusResponseResumeController extends Controller
{
    public function viewed(Request $request)
    {
        $resume_id = $request['resume_id'];

        $vacancy_id = $request['vacancy_id'];

        $statusResponse = StatusResumeVacancy::where('resume_id', $resume_id)->where('vacancy_id', $vacancy_id)->update(['status_id' => 4]);

        dd($statusResponse);
    }
}
