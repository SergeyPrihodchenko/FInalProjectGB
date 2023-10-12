<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\ReviewsOfCompanies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReviewsOfCompaniesController extends Controller
{
    public function index(Request $request)
    {
        $rewiews = ReviewsOfCompanies::all();

        return Inertia::render('UserCompanyListPage/ui/UserCompanyListPage/UserCompanyListPage', [
            'rewiews' => $rewiews
        ]);
    }

    public function create()
    {
        return Inertia::render('CompanyPageCreate/ui/CompanyPageCreate/CompanyPageCreate',);
        //return view('company.create');

    }
}
