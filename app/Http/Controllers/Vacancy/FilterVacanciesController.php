<?php

namespace App\Http\Controllers\Vacancy;

use App\Http\Controllers\Controller;
use App\Http\Requests\Filter\FilterVacancyRequest;
use App\Models\SqlBuild;

class FilterVacanciesController extends Controller
{

    public function filterVacancy(FilterVacancyRequest $request) 
    {
        $data = $request->validated();
        $filterData = $data['filterData'];
        $filtredData = SqlBuild::filterQueryVacancyBuild($filterData);

        return \response($filtredData);
    }
}

// "{"filterData":{"employment":["Сменный график","Гибкий график"],"schedule":[],"experience":"","city_id":[],"title":"ди","payment":""}}"
