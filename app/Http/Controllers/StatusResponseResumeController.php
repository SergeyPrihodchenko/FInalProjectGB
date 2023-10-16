<?php

namespace App\Http\Controllers;

use App\Models\UserResponseVacancies;
use Illuminate\Http\Request;

class StatusResponseResumeController extends Controller
{
    public function viewed(Request $request)
    {
        $resume_id = $request['resume_id'];

        $vacancy_id = $request['vacancy_id'];

        UserResponseVacancies::where('resume_id', $resume_id)->where('vacancy_id', $vacancy_id)->update(['status_id' => 4]);

    }

    public function refusal(Request $request)
    {
        $resume_id = $request['resume_id'];

        $vacancy_id = $request['vacancy_id'];

        UserResponseVacancies::where('resume_id', $resume_id)->where('vacancy_id', $vacancy_id)->update(['status_id' => 2]);
    }
    
    public function invitation(Request $request)
    {
        $resume_id = $request['resume_id'];

        $vacancy_id = $request['vacancy_id'];

        UserResponseVacancies::where('resume_id', $resume_id)->where('vacancy_id', $vacancy_id)->update(['status_id' => 1]);
    }
}
