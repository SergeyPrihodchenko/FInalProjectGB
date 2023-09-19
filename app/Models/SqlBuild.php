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
                $vacancy = $vacancy->where($key, '>=' , $value);
            }
        }
        return $vacancy->paginate(3);
    }
}
