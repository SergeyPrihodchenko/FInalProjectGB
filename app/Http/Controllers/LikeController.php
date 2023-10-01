<?php

namespace App\Http\Controllers;

use App\Models\User_like_vacancy;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function store(Request $request)
    {
       $likeVacancy = new User_like_vacancy;

       $dataLike = $request->post('like');
       
       $likeVacancy->store($dataLike);
    }

    public function destroy(Request $request)
    {
        $likeVacancy = new User_like_vacancy;

        $id = $request->post('id');
        
        $likeVacancy->destroy_like($id);
    }
}
