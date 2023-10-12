<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Resume;
use App\Models\UserResponseVacancies;
use App\Models\Vacancy;
use Illuminate\Http\Request;

class CandidateConditionController extends Controller
{
    public function getCandidate()
    {
        $id = auth()->id();

        $companyId = Company::where('creator_id', $id)->get('id');

        $arrComp = [];
        foreach ($companyId as $value) {
            $arrComp[] = $value['id'];
        }

        $vacancyId = Vacancy::whereIn('company_id', $arrComp)->get('id')->toArray();

        $arrVacanId = [];

        foreach ($vacancyId as $value) {
            $arrVacanId[] = $value['id'];
        }

        $candidateId = UserResponseVacancies::whereIn('vacancy_id', $arrVacanId)->get('resume_id')->toArray();

        $arrResumId = [];

        foreach ($candidateId as $value) {
            $arrResumId[] = $value['resume_id'];
        }

        $resumes = Resume::whereIn('id', $arrResumId)->get()->toArray();

        return $resumes;
    }
}
