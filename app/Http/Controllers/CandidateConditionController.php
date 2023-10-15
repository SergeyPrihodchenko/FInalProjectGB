<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Resume;
use App\Models\UserResponseVacancies;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CandidateConditionController extends Controller
{
    public function getCandidate()
    {
        $id = auth()->id();

        $companyId = Company::where('creator_id', $id)->get('id');

        $arrComp = array_values($companyId);

        $vacancyId = Vacancy::whereIn('company_id', $arrComp)->get('id')->toArray();

        $arrVacanId = array_values($vacancyId);

        $candidateId = UserResponseVacancies::whereIn('vacancy_id', $arrVacanId)->get('resume_id')->toArray();

        $arrResumId = array_values($candidateId);

        $resumes = Resume::whereIn('id', $arrResumId)->get()->toArray();

        return Inertia::render('CandidatePage/CandidatePage', [
            'title' => 'Кандидаты',
            'resumes' => $resumes
        ]);
    }
}
