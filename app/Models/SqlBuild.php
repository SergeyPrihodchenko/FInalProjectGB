<?php

namespace App\Models;

class SqlBuild
{
    static public function filterQueryBuild(array $arr)
    {
        $vacancy = Vacancy::query();
        foreach ($arr as $key => $value) {
            if(is_array($value) && !empty($value)) {
                $vacancy = $vacancy->whereIn($key, $value);
                } elseif(!is_array($value) && !empty($value)) {
                    $vacancy = $vacancy->where($key, $value);
            } elseif($key == 'title' && !empty($value)) {
                $vacancy = $vacancy->where('vacancies.title', 'LIKE', '%'.$value.'%');
            }
        }
        $vacancy = $vacancy
        ->join('cities', 'vacancies.city_id', '=', 'cities.id')
        ->join('companies', 'vacancies.company_id', '=', 'companies.id')
        ->select('vacancies.id as id','vacancies.title as title', 'vacancies.payment as payment', 'vacancies.employment as employment', 'vacancies.schedule as schedule','vacancies.experience as experience','companies.name as conditions', 'cities.title as city');
        return $vacancy->paginate(3);
    }
}
