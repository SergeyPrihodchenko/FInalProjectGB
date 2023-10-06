<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MyCompaniesController extends Controller
{
    public function index(Request $request)
    {

        $creatorId = Auth::user()->id;
        $companies = Company::where('creator_id', $creatorId)->get();
        //dd($companiesId);

        return Inertia::render('UserCompanyListPage/ui/UserCompanyListPage/UserCompanyListPage', [
            'companies' => $companies

        ]);
    }
}
