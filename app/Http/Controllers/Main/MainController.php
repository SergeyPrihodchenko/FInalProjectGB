<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Http\Requests\Category\CategoryRequest;
use App\Models\Category;
use App\Models\Vacancy;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class MainController extends Controller
{
    public function index() 
    {
        $categories = Category::all();
        $vacancies = Vacancy::all()->take(3);
            return Inertia::render('Main', [
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'categories' => $categories,
                'vacancies' => $vacancies
            ]);
    }

    public function searchSort(CategoryRequest $request) 
    {
        $data = $request->validated();
        $searchStr = $data['vacancy'];
        $vacancies = Vacancy::where('title', 'like', '%'.$searchStr.'%')->get();
        if (count($vacancies) !== 0) {
            return Inertia::render('Vacancy/Index', [
                'title' => 'Вакансии',
                'vacancies' => $vacancies
            ]);
        }
        return Inertia::render('Vacancy/Index', [
            'title' => 'Такой вакансии нет' . $request->get('title'),
            'vacancies' => []
        ]);
    }
}
