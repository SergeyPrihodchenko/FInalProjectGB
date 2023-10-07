<?php

namespace App\Http\Controllers;

use App\Models\UserLikeVacancies;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function store(Request $request)
    {
       $likeVacancy = new UserLikeVacancies;

       $dataLike = $request->post('like');
       
       $likeVacancy->store($dataLike);
    }

    public function destroy(Request $request)
    {
        $likeVacancy = new UserLikeVacancies;

        $id = $request->post('id');
        
        $likeVacancy->destroy_like($id);
    }
}
