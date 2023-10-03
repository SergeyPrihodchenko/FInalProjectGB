<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Http\Requests\Company\StoreCompanyRequest;
use App\Models\City;
use App\Models\CompanyUser;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use function Termwind\render;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $companies = Company::all();
        //dd($companies);
        //dd($request->all());
        //$date = $request->all();
        return Inertia::render('CompanyListPage/ui/CompanyListPage/CompanyListPage', [
            'companies'=>$companies
//
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $cities = City::all();
        return Inertia::render('CompanyPageCreate/ui/CompanyPageCreate/CompanyPageCreate', ['cities'=> $cities]);
        //return view('company.create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCompanyRequest $request)
    {
        $data = $request->validated();
        $creatorId = Auth::user()->id;
        $data['creator_id'] = $creatorId;
        //dd($data);
        $company = Company::create($data);
        //dd($company);

//
        return Redirect::route('myCompanies');
    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company) {
       //return Inertia::render('Company/company_detail', [
        return Inertia::render('CompanyPage/CompanyPage', [
            'company' => $company,
            //'userId' => $userId,
            //'isSubscribed' => $isSubscribed,
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company)
    {

        return Inertia::render('CompanyPageUpdate/ui/CompanyPageUpdate/CompanyPageUpdate',  ['company' => $company,
           ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreCompanyRequest $request, $id)
    {

        $date = $request->validated();
        $company = Company::find($id);
        $company->update($date);
        return Inertia::render('Company/company_detail', [
            'company' => $company,

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company)
    {
        $company->delete();
        return Redirect::route('myCompanies');
    }
}
