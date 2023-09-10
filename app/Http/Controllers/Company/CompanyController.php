<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $companies = Company::all();
        //dd($companies);

        return Inertia::render('Company/Index', [
            'companies'=>$companies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $date = $request->only([
            'name',
            'email' ,
            'website',
            'phone_number' ,
            'address' ,
            'created_at',
            'updated_at']);
        $company = Company::create($date);
    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $date = $request->only([
            'name',
            'email' ,
            'website',
            'phone_number' ,
            'address' ,
            'created_at',
            'updated_at']);
        $company = Company::find($id);
        $company->update($date);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company)
    {
        //
    }
}
