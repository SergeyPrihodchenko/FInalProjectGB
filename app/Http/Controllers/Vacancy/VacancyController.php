<?php

namespace App\Http\Controllers\Vacancy;

use App\Enums\EmploymentType;
use App\Enums\Experience;
use App\Enums\ScheduleType;
use App\Http\Requests\Vacancy\StoreRequest;
use App\Models\City;
use App\Models\Company;
use App\Models\Vacancy;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class VacancyController
{
    public function index(): \Inertia\Response
    {
        //VacancyPage/ui/VacancyPageList/VacancyPageList
        //В странице Vacancy/Index больше не нужны дынные из БД в этом свойтве
        // return Inertia::render('Vacancy/Index', [
        //     'title' => 'Вакансии'
        // ]);
        $employment = EmploymentType::all();
        $schedule = ScheduleType::all();
        $experience = Experience::all();
        $cities = City::all(['id', 'title']);

        return Inertia::render('Vacancy/Index', [
            'title' => 'Вакансии',
            'employment' => $employment,
            'schedule' => $schedule,
            'experience' => $experience,
            'cities' => $cities
        ]);
    }

    public function show(Vacancy $vacancy): \Inertia\Response
    {
        //VacancyPage/ui/VacancyPage/VacancyPage
        return Inertia::render('VacancyPage/ui/VacancyPage/VacancyPage', [
            'vacancy' => $vacancy
        ]);
    }

    public function create(): \Inertia\Response
    {
        //return Inertia::render('CreateVacancyPage/ui/CreateVacancyPage/CreateVacancyPage');
        $companies = Company::all();

        return Inertia::render('Vacancy/VacancyCreate', [
            'companies' => $companies
        ]);
    }

    


    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        $vacancy = Vacancy::create($data);

        return Redirect::route('vacancy.index');

//        return Inertia::render('Vacancy/Show', [
//            'vacancy' => $vacancy
//        ]);
    }

    public function update(Vacancy $vacancy, StoreRequest $request)
    {
        $data = $request->validated();

        $vacancy->update($data);

        return Inertia::render('Vacancy/Show', [
            'vacancy' => $vacancy
        ]);
    }

    public function destroy(Vacancy $vacancy)
    {
        $vacancy->delete();

        return response('', 204);
    }
}
