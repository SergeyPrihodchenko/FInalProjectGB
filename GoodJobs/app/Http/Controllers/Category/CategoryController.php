<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show($id)
    {
        $vacancies = (Category::find($id))->vacancies;
        return Inertia::render('Vacancy/Index', [
            'title' => 'Вакансии',
            'vacancies' => $vacancies
        ]);
    }
}
