<?php

namespace App\Http\Controllers\Main;

use App\Enums\EmploymentType;
use App\Enums\Experience;
use App\Enums\ScheduleType;
use App\Http\Controllers\Controller;
use App\Http\Requests\Category\CategoryRequest;
use App\Models\Category;
use App\Models\City;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Laravel\Prompts\select;

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
        $employment = EmploymentType::all();
        $schedule = ScheduleType::all();
        $experience = Experience::all();
        $cities = City::all();
        
        $data = $request->validated();
        $searchStr = $data['vacancy'];
        $vacancies = Vacancy::where('vacancies.title', 'like', '%'.$searchStr.'%')->get();
        if (!empty($vacancies)) {
            return Inertia::render('VacancyListPage/VacancyListPage', [
                'title' => 'Вакансии',
                'vacancies' => $vacancies,
                'employment' => $employment,
                'cities' => $cities,
                'schedule' => $schedule,
                'experience' => $experience

            ]);
        }
        return Inertia::render('VacancyListPage/VacancyListPage', [
            'title' => 'Такой вакансии нет' . $request->get('title'),
            'vacancies' => []
        ]);
    }

    public function beforeSearchSort(CategoryRequest $request) 
    {
        $data = $request->validated();
        $searchStr = $data['str'];
        return Vacancy::where('title', 'like', '%'.$searchStr.'%')->distinct()->get('title');
    }
}
