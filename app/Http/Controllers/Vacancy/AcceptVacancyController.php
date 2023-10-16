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
        // $resumeId = Resume::where('user_id', $id)->get('id')->toArray();
        // $arrResumeId = array_values($resumeId);

        // $vacancies = UserResponseVacancies::whereIn('resume_id', $arrResumeId)->get('vacancy_id')->toArray();
        // $arrVacancies = array_values($vacancies);
        
        // $vacancy = Vacancy::query();
        // $vacancy->whereIn('vacancies.id', $arrVacancies);
        
        // $vacancy
        //     ->join('cities', 'vacancies.city_id', '=', 'cities.id')
        //     ->join('companies', 'vacancies.company_id', '=', 'companies.id')
        //     ->select('vacancies.id as id', 'vacancies.title as title', 'vacancies.payment as payment', 'vacancies.employment as employment', 'vacancies.schedule as schedule', 'vacancies.experience as experience', 'companies.name as conditions', 'cities.title as city', 'vacancies.description as description');
        // $vacancy = $vacancy->get();

        $resumes = Resume::where('user_id', $id)->get('id')->toArray();
        $arrResumeId = array_values($resumes);

        $vacancies = UserResponseVacancies::whereIn('resume_id', $arrResumeId)
        ->join('statuses', 'statuses.id', 'user_response_vacancies.status_id')
        ->join('vacancies', 'vacancies.id', 'user_response_vacancies.vacancy_id')
        ->join('companies', 'companies.id', 'vacancies.company_id')
        ->select('vacancies.id as id', 'vacancies.title as title', 'vacancies.payment as payment', 'vacancies.employment as employment', 'vacancies.schedule as schedule', 'vacancies.experience as experience', 'companies.name as conditions', 'vacancies.description as description', 'statuses.title as status')
        ->get()->toArray();

        return Inertia::render('UserResponsesListPage/UserResponsesListPage', [
            'vacancies' => $vacancies
        ]);
    }

    public function store(Request $request)
    {
        $resume_id = $request['resume_id'];
        $vacancy_id =$request['vacancy_id'];

        UserResponseVacancies::create(['resume_id' => $resume_id, 'vacancy_id' => $vacancy_id, 'status_id' => 4]);
    }
}
