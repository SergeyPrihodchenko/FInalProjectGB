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
        $resume = Resume::where('user_id', $id)->get('id')->toArray();
        $arr = [];
        foreach ($resume as $value) {
            $arr[] = $value['id'];
        }
        $vacancies = UserResponseVacancies::whereIn('resume_id', $arr)->get('vacancy_id');
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

        $resumes = Resume::where('user_id', $id)->get()->toArray();

        return Inertia::render('UserResponsesListPage/UserResponsesListPage', [
            'vacancies' => $vacancy,
            'resumes' => $resumes
        ]);
    }

    public function store(Request $request)
    {
        $user_id = $request['resume_id'];
        $vacancy_id =$request['vacancy_id'];

        UserResponseVacancies::create(['resume_id' => $user_id, 'vacancy_id' => $vacancy_id]);
    }
}
