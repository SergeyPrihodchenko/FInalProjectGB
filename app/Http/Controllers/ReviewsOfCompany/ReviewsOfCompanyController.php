<?php

namespace App\Http\Controllers\ReviewsOfCompany;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReviewsOfCompany\StoreReviewRequest;
use App\Models\Company;
use App\Models\ReviewsOfCompany;
use Illuminate\Http\Request;
use Inertia\Inertia;
use function Termwind\render;


class ReviewsOfCompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reviewsOfCompanies = ReviewsOfCompany::all();
        dd($reviewsOfCompanies);

        return Inertia::render('ReviewsOfCompany/Index', [
            'reviewsOfCompanies'=>$reviewsOfCompanies
        ]);
    }
//
//    /**
//     * Show the form for creating a new resource.
//     */
//    public function create()
//    {
//        return Inertia::render('ReviewsOfCompany/create_review');
//
//    }

//    /**
//     * Store a newly created resource in storage.
//     */
//    public function store(StoreReviewRequest $request)
//    {
//        $date = $request->validated();
//        $reviewsOfCompany = ReviewsOfCompany::create($date);
//        return Inertia::render('ReviewsOfCompany/review_detail', [
//            'reviewsOfCompany'=>$reviewsOfCompany
//        ]);
//    }

//    /**
//     * Display the specified resource.
//     */
//    public function show(ReviewsOfCompany $reviewsOfCompany) {
//         //dd($reviewsOfCompany);
//        return Inertia::render('ReviewsOfCompany/review_detail', [
//            'reviewsOfCompany' => $reviewsOfCompany
//        ]);
//
//    }
//
//    /**
//     * Show the form for editing the specified resource.
//     */
//    public function edit(ReviewsOfCompany $reviewsOfCompany)
//    {
//        return Inertia::render('ReviewsOfCompany/Edit');
//    }
//
//    /**
//     * Update the specified resource in storage.
//     */
//    public function update(StoreReviewRequest $request, $id)
//    {
//        $date = $request->validated();
//        $reviewsOfCompany = ReviewsOfCompany::find($id);
//        $reviewsOfCompany->update($date);
//    }

//    /**
//     * Remove the specified resource from storage.
//     */
//    public function destroy(ReviewsOfCompany $reviewsOfCompany)
//    {
//        $reviewsOfCompany->delete();
//
//    }
}
