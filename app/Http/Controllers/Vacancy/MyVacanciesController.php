<?php

namespace App\Http\Controllers\Vacancy;

use App\Http\Controllers\Controller;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MyVacanciesController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $user = $request->user();

        $vacancies = Vacancy::all()->where('company_id', $user->id);

        // Убрать эту строчку
        return dd($vacancies);

        // Добавить путь
        return Inertia::render('Путь к компоненту', [
            'vacancies' => $vacancies,
        ]);
    }
}
