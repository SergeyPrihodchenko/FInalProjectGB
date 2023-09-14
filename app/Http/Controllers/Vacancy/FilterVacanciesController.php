<?php

namespace App\Http\Controllers\Vacancy;

use App\Enums\ScheduleType;
use App\Http\Controllers\Controller;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FilterVacanciesController extends Controller
{

    public function index() 
    {
        return Inertia::render('VacancyTest');
    }

    public function filterVacancy(Request $request) 
    {
        return \response()->json(['post' => $request->post('test')]);
    }
}
