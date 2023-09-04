<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Vacancy;
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

    public function searchSort(Request $request) 
    {
        $searchStr = $request->get('vacancy');
        $vacanciesCat = Vacancy::where('title', 'like', '%'.$searchStr.'%')->get();
        if (count($vacanciesCat) !== 0) {
            return Inertia::render('Vacancy/Index', [
                'title' => 'Вакансии' . $request->get('title'),
                'vacancies' => $vacanciesCat
            ]);
        }
        return Inertia::render('Vacancy/Index', [
            'title' => 'Такой вакансии нет' . $request->get('title'),
            'vacancies' => []
        ]);
    }
}
