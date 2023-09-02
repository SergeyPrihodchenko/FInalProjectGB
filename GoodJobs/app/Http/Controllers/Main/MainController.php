<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class MainController extends Controller
{
    public function index() 
    {
        $categories = Category::all();
        $vacancy = Vacancy::all();
        if (!empty($categories) && !empty($vacancy)) {
            return Inertia::render('Main', [
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'categories' => $categories,
                'vacancy' => $vacancy
            ]);
        } else {
            return Inertia::render('Main', [
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register')
            ]);
        }
        
    }
}
