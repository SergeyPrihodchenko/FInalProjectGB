<?php

namespace App\Http\Controllers\Vacancy;

use App\Enums\EmploymentType;
use App\Enums\Experience;
use App\Enums\ScheduleType;
use App\Http\Requests\Vacancy\StoreRequest;
use App\Models\City;
use App\Models\Company;
use App\Models\User_like_vacancy;
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
        $likes = User_like_vacancy::getVacancyIdArray(auth()->id());

        return Inertia::render('VacancyListPage/VacancyListPage', [
            'title' => 'Вакансии',
            'employment' => $employment,
            'schedule' => $schedule,
            'experience' => $experience,
            'cities' => $cities,
            'likes' => $likes,
        ]);
    }

    public function show(Vacancy $vacancy): \Inertia\Response
    {
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

        return Inertia::render('VacancyPageCreate/ui/VacancyPageCreate/VacancyPageCreate', [
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

        if (isset($data['skills']) && is_array($data['skills'])) {
            $data['skills'] = json_encode($data['skills']);
        }
        if (isset($data['requirements']) && is_array($data['requirements'])) {
            $data['requirements'] = json_encode($data['requirements']);
        }
        if (isset($data['responsibilities']) && is_array($data['responsibilities'])) {
            $data['responsibilities'] = json_encode($data['responsibilities']);
        }
        if (isset($data['conditions']) && is_array($data['conditions'])) {
            $data['conditions'] = json_encode($data['conditions']);
        }
        if (isset($data['contacts']) && is_array($data['contacts'])) {
            $data['contacts'] = json_encode($data['contacts']);
        }

        $vacancy = Vacancy::create($data);

        return Redirect::route('vacancy.index');
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

        return Inertia::render('VacancyPageUpdate/ui/VacancyPageUpdate/VacancyPageUpdate', [
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
