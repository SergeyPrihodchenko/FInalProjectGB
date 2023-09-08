<?php

namespace App\Http\Controllers\Vacancy;

use App\Http\Requests\Vacancy\StoreRequest;
use App\Models\Vacancy;
use Inertia\Inertia;

class VacancyController
{
    public function index():\Inertia\Response
    {
        $vacancies = Vacancy::all();

        return Inertia::render('Vacancy/Index', [
            'title' => 'Вакансии',
            'vacancies' => $vacancies
        ]);
    }

    public function show(Vacancy $vacancy):\Inertia\Response
    {
        return Inertia::render('VacancyPage/ui/VacancyPage/VacancyPage', [
            'title' => $vacancy->title,
            'vacancy' => $vacancy
        ]);
    }

    public function create():\Inertia\Response
    {
        return Inertia::render('Vacancy/CreateVacancy');
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        $vacancy = Vacancy::create($data);

        return Inertia::render('Vacancy/Show', [
            'title' => $vacancy->title,
            'vacancy' => $vacancy
        ]);
    }

    public function update(Vacancy $vacancy, StoreRequest $request)
    {
        $data = $request->validated();

        $vacancy->update($data);

        return Inertia::render('Vacancy/Show', [
            'title' => $vacancy->title,
            'vacancy' => $vacancy
        ]);
    }

    public function destroy(Vacancy $vacancy)
    {
        $vacancy->delete();

        return response('', 204);
    }
}
