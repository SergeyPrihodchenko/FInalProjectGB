<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Http\Requests\Category\CategoryRequest;
use App\Models\Category;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show(Request $request, $id)
    {
        $vacancies = (Category::find($id))->vacancies;
        return Inertia::render('Vacancy/Index', [
            'title' => 'Вакансии - ' . $request->get('title'),
            'vacancies' => $vacancies
        ]);
    }

    public function serchSort(CategoryRequest $request) 
    {
        $data = $request->validated();
        $serchStr = $data['vacancy'];
        $vacancies = Vacancy::where('title', 'like', '%'.$serchStr.'%')->get();
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