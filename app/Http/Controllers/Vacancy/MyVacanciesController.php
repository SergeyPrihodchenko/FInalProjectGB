<?php

namespace App\Http\Controllers\Vacancy;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MyVacanciesController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $user = $request->user();

        $companies = Company::where('creator_id', $user->id)->get('id')->toArray();

        $vacancies = Vacancy::whereIn('company_id', $companies)->get();

        // Убрать эту строчку
        // return dd($vacancies);

        // Добавить путь
        return Inertia::render('Путь к компоненту', [
            'vacancies' => $vacancies,
        ]);
    }
}
