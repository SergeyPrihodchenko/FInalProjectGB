<?php

namespace App\Http\Controllers\Vacancy;

use App\Http\Controllers\Controller;
use App\Http\Requests\FilterRequest;
use App\Models\SqlBuild;
use App\Models\Vacancy;
use Illuminate\Http\Request;

class FilterVacanciesController extends Controller
{

    public function filterVacancy(FilterRequest $request) 
    {
        $filterData = $request->post('filterData');


        $filtredData = SqlBuild::filterQueryBuild($filterData);

        return \response($filtredData);
    }
}
