<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show(Request $request, $id)
    {
        $vacancies = (Category::find($id))->vacancies;
        return Inertia::render('CategoryPage/CategoryPage', [
            'titleCat' => 'Вакансии - ' . $request->get('title'),
            'vacancies' => $vacancies
        ]);
    }
}