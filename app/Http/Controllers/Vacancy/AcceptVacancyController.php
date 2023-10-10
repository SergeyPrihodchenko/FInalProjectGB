<?php

namespace App\Http\Controllers\Vacancy;

use App\Http\Controllers\Controller;
use App\Models\Resume;
use App\Models\UserResponseVacancies;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AcceptVacancyController extends Controller
{
    public function index()
    {
        $id = auth()->id();
        $resumeId = Resume::where('user_id', $id)->get('id')->toArray();
        $arrResumeId = [];
        foreach ($resumeId as $value) {
            $arrResumeId[] = $value['id'];
        }
        $vacancies = UserResponseVacancies::whereIn('resume_id', $arrResumeId)->get('vacancy_id')->toArray();
        $arrVacancies = [];
        foreach ($vacancies as $value) {
            $arrVacancies[] = $value['vacancy_id'];
        }
        
        $vacancy = Vacancy::query();
        $vacancy->whereIn('vacancies.id', $arrVacancies);
        
        $vacancy
            ->join('cities', 'vacancies.city_id', '=', 'cities.id')
            ->join('companies', 'vacancies.company_id', '=', 'companies.id')
            ->select('vacancies.id as id', 'vacancies.title as title', 'vacancies.payment as payment', 'vacancies.employment as employment', 'vacancies.schedule as schedule', 'vacancies.experience as experience', 'companies.name as conditions', 'cities.title as city', 'vacancies.description as description');
        $vacancy = $vacancy->get();
        return Inertia::render('UserResponsesListPage/UserResponsesListPage', [
            'vacancies' => $vacancy
        ]);
    }

    public function store(Request $request)
    {
        $user_id = $request['user_id'];
        $vacancy_id =$request['vacancy_id'];

        UserResponseVacancies::create(['user_id' => $user_id, 'vacancy_id' => $vacancy_id]);
    }
}
