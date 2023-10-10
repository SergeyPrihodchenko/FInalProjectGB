<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use App\Http\Requests\Filter\FilterResumeRequest;
use App\Queries\FilterResumeQueryBuilder;
use Inertia\Inertia;

class FilterResumeController extends Controller
{
    public function filterResumes(FilterResumeRequest $request)
    {


        $data = $request->validated();

        $filteredData = $data['filterData'];

        $filteredData = FilterResumeQueryBuilder::filterQueryResumeBuild($filteredData);

        return response($filteredData);
    }
}
