<?php

namespace App\Http\Controllers\Vacancy;

use App\Http\Controllers\Controller;
use App\Http\Requests\FilterRequest;
use App\Models\SqlBuild;
use Illuminate\Http\Request;

class FilterVacanciesController extends Controller
{

    public function filterVacancy(FilterRequest $request) 
    {
        $data = $request->validated();
        $filterData = $data['filterData'];
        $filtredData = SqlBuild::filterQueryBuild($filterData);

        return \response($filtredData);
    }
}

// "{"filterData":{"employment":["Сменный график","Гибкий график"],"schedule":[],"experience":"","city_id":[],"title":"ди","payment":""}}"
