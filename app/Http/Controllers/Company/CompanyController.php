<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Http\Requests\Company\StoreCompanyRequest;
use App\Models\City;
use App\Models\Company;
use Illuminate\Http\Request;
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
        return Inertia::render('Company/Index', [
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
        return Inertia::render('Company/create_company', ['cities'=> $cities]);
        //return view('company.create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCompanyRequest $request)
    {
        $date = $request->validated();
        $company = Company::create($date);
        return Inertia::render('Company/company_detail', [
            'company'=>$company
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company) {
    //{ dd($company);
        return Inertia::render('Company/company_detail', [
            'company' => $company,
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company)
    {

        return Inertia::render('Company/edit',  ['company' => $company,
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

    }
}
