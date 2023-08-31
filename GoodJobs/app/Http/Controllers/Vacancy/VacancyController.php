<?php

namespace App\Http\Controllers\Vacancy;

use App\Http\Requests\Vacancy\StoreRequest;
use App\Models\Vacancy;

use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class VacancyController
{
    public function index(Vacancy $vacancy)
    {

        $vacancies = Vacancy::all();

        return Inertia::render('Vacancy', [
            'title' => 'Вакансии',
            'vacancies' => $vacancies
        ]);
    }

    public function store(Vacancy $vacancy, StoreRequest $request)
    {
        $data = $request->validated();

        $vacancy = Vacancy::create($data);

        return response($vacancy, Response::HTTP_CREATED);
    }

}
