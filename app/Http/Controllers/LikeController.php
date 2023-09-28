<?php

namespace App\Http\Controllers;

use App\Models\LikeVacancy;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function store(Request $request)
    {
       $likeVacancy = new LikeVacancy;

       $dataLike = $request->post('like');
       
       $likeVacancy->user_id = $dataLike['user_id'];
       $likeVacancy->vacancy_id = $dataLike['vacancy_id'];

       $likeVacancy->save();
    }

    public function destroy(Request $request)
    {
        $likeVacancy = new LikeVacancy();

        $id = $request->post('id');
        
        $likeVacancy->where('vacancy_id', $id)->delete();    
    }
}
