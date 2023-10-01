<?php

namespace App\Http\Controllers\Company;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MyCompaniesController
{
    public function index(Request $request)
    {

        $userId = Auth::user()->id;
        $companiesId = DB::table('company_user')->where('user_id', $userId)->get(['company_id']);
        //$companies = Company::all();
        $companies = [];
        foreach ($companiesId as $arrItem){
            $companies[] = Company::find($arrItem->company_id);
        }

        return Inertia::render('Company/CompanyList', [
            'companies' => $companies
//
        ]);
    }
}
