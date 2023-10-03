<?php

namespace App\Http\Controllers\Company;

use App\Models\Company;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MyCompaniesController
{
    public function index(Request $request)
    {

        $creatorId = Auth::user()->id;
        $companies = DB::table('companies')->where('creator_id', $creatorId)->get();
        //dd($companiesId);
        //$companies = Company::all();
//        $companies = [];
//        foreach ($companiesId as $arrItem){
//            $companies[] = Company::find($arrItem->company_id);
//        }

        return Inertia::render('UserCompanyListPage/ui/UserCompanyListPage/UserCompanyListPage', [
            'companies' => $companies
//
        ]);
    }
}
