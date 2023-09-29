<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_like_vacancy extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'vacancy_id'
    ];

    static public function getVacancyIdArray($id): array
    {
        $likes = self::where('user_id', $id)->get('vacancy_id');
        $arr = [];
        foreach ($likes as $value) {
            $arr[] = $value->getAttributes()['vacancy_id'];
        }
        return $arr;
    }

    public function store($data)
    {
       $test = self::create(['user_id' => $data['user_id'], 'vacancy_id' => $data['vacancy_id']]);
       $test->save();
    }

    public function destroy_like($id)
    {   
        self::where('vacancy_id', $id)->delete();
    }
}
