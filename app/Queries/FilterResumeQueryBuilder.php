<?php

namespace App\Queries;

use App\Models\Resume;

final class FilterResumeQueryBuilder
{
    static public function filterQueryResumeBuild(array $data)
    {
        $resume = Resume::query();

        foreach($data as $key => $value){
            if (is_array($value) && !empty($value)) {
                $resume = $resume->whereIn($key, $value);
            }
            if($key == 'relocation' && !empty($value)){
                $resume = $resume->where($key, $value);
            }
            if($key == 'buisness_travel' && !empty($value)){
                $resume = $resume->where($key, $value);
            }
            if($key == 'salary' && !empty($value)){
                $resume = $resume->where($key, '>=', $value);
            }
            if($key == 'search' && !empty($value)){
                $resume = $resume->where('resumes.profession', 'LIKE', '%' . $value . '%');
            }
        }

        return $resume->paginate(4);
    }
}