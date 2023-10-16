<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Resume;
use App\Models\UserResponseVacancies;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CandidateConditionController extends Controller
{
    public function getCandidate()
    {
        $id = auth()->id();

        $companies = Company::where('creator_id', $id)->get()->toArray();

        $companiesId = [];

        foreach ($companies as $value) {
            $companiesId[] = $value['id'];
        }

        $vacancies = Vacancy::whereIn('company_id', $companiesId)->get('id')->toArray();

        $vacanciesId = [];

        foreach ($vacancies as $value) {
            $vacanciesId[] = $value['id'];
        }


        $resumes = UserResponseVacancies::whereIn('vacancy_id', $vacanciesId)
        ->join('resumes', 'resumes.id', 'user_response_vacancies.resume_id')
        ->join('statuses', 'statuses.id', 'user_response_vacancies.status_id')->get()->toArray();

        return Inertia::render('CandidatePage/ui/CandidatePage/CandidatePage', [
            'title' => 'Кандидаты',
            'resumes' => $resumes
        ]);
    }
}