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

        $statusResponse = UserResponseVacancies::where('resume_id', $resume_id)->where('vacancy_id', $vacancy_id)->update(['status_id' => 3]);

        dd($statusResponse);
    }
}
