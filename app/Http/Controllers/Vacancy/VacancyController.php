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
use function Symfony\Component\String\u;

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
        $vacancy['requirements'] = explode('--;', $vacancy['requirements']);
        $vacancy['responsibilities'] = explode('--;', $vacancy['responsibilities']);
        $vacancy['conditions'] = explode('--;', $vacancy['conditions']);
        $vacancy['skills'] = explode('--;', $vacancy['skills']);

        $newContacts = [];
        $vacancy['contacts'] = explode('--;', $vacancy['contacts']);
        if($vacancy['contacts'] && is_array($vacancy['contacts'])) {
            foreach ($vacancy['contacts'] as $index=>$arItem) {
                $newContacts[] = explode(';', $arItem);
            }
            $vacancy['contacts'] = $newContacts;
        }


        return Inertia::render('VacancyPage/ui/VacancyPage/VacancyPage', [
            'vacancy' => $vacancy
        ]);
    }

    public function create(): \Inertia\Response
    {
        //return Inertia::render('VacancyPageCreate/ui/VacancyPageCreate/VacancyPageCreate');
        $companies = Company::all();
        $cities = City::all();
        $citiesForWork = City::all();
        $experience = Experience::all();
        $schedule = ScheduleType::all();
        $employment = EmploymentType::all();

        return Inertia::render('Vacancy/VacancyCreate', [
            'companies' => $companies,
            'cities' => $cities,
            'citiesForWork' => $citiesForWork,
            'experience' => $experience,
            'schedule' => $schedule,
            'employment' => $employment,
        ]);
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        $data['requirements'] = implode('--;', $data['requirements']);
        $data['responsibilities'] = implode('--;', $data['responsibilities']);
        $data['conditions'] = implode('--;', $data['conditions']);
        $data['skills'] = implode('--;', $data['skills']);

        $newContacts = [];
        foreach ($data['contacts'] as &$arItem) {
            $arItem = implode(';', $arItem);
        }
        $data['contacts'] = implode('--;', $data['contacts']);

        $vacancy = Vacancy::create($data);

        return Redirect::route('vacancy.index');

//        return Inertia::render('Vacancy/Show', [
//            'vacancy' => $vacancy
//        ]);
    }

    public function edit(Vacancy $vacancy): \Inertia\Response
    {
        //return Inertia::render('VacancyPageCreate/ui/VacancyPageCreate/VacancyPageCreate');
        $companies = Company::all();
        $cities = City::all();
        $citiesForWork = City::all();
        $experience = Experience::all();
        $schedule = ScheduleType::all();
        $employment = EmploymentType::all();

        return Inertia::render('Vacancy/VacancyUpdate', [
            'vacancy' => $vacancy,
            'companies' => $companies,
            'cities' => $cities,
            'citiesForWork' => $citiesForWork,
            'experience' => $experience,
            'schedule' => $schedule,
            'employment' => $employment,
        ]);
    }


    public function update(Vacancy $vacancy, StoreRequest $request)
    {
        $data = $request->validated();

        $vacancy->update($data);

        return Inertia::render('VacancyPage/ui/VacancyPage/VacancyPage', [
            'vacancy' => $vacancy
        ]);
    }

    public function destroy(Vacancy $vacancy)
    {
        $vacancy->delete();

        return response('', 204);
    }
}
