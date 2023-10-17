<?php

namespace App\Http\Controllers\Company;

use App\Http\Requests\Company\StoreReviewsOfCompaniesRequests;
use App\Models\Company;
use App\Models\ReviewsOfCompanies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ReviewsController
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $reviews = ReviewsOfCompanies::all();

        return Inertia::render('Reviews/index', [
            'reviews' => $reviews
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($companyId)
    {
//dd($companyId);
        return Inertia::render('Reviews/create', ['company'=>$company]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReviewsOfCompaniesRequests $request)
    {
        $data = $request->validated();

        ReviewsOfCompanies::create($data);

//dd($data);
        return  redirect()->route('reviews.index', );
        //return Redirect::route('reviews.show', $data['company_id']);
    }

    /**
     * Display the specified resource.
     */
    public function show( $companyId)
    {

        //dd($company);
        $company=Company::find($companyId);
        return Inertia::render('Reviews/create', ['company'=>$company]);
        //$reviews = ReviewsOfCompanies::where('company_id', $companyid)->with('user')->get();
//        return Inertia::render('Reviews/show', [
//            'reviews' => $reviews
//        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

}
