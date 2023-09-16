<?php

use App\Http\Controllers\Company\CompanyController;

use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Vacancy\FilterVacanciesController;
use App\Http\Controllers\Main\MainController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Resume\ResumeController;
use App\Http\Controllers\Vacancy\VacancyController;
use App\Models\Vacancy;
use App\Models\Company;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [MainController::class, 'index'])->name('main');
Route::get('/searchSort', [MainController::class, 'beforeSearchSort']);
Route::get('/category/search', [MainController::class, 'searchSort'])->name('category.sort');

Route::get('/testPageCompany', function () {
    return Inertia::render('CompanyPage/CompanyPage');
})->name('company');

Route::get('/profilePage', function () {
    return Inertia::render('ProfilePage/ProfilePage');
})->middleware(['auth', 'verified'])->name('profilePage');

//testResumePages
Route::get('/testResumePageForm', function () {
    return Inertia::render('ResumeFormCreate/ResumeFormCreate');
})->name('resumeForm');

Route::get('/testResumePage', function () {
    return Inertia::render('ResumePage/ResumePage');
})->name('resumePage');



Route::get('/category/sort/{id}', [CategoryController::class, 'show'])->name('category.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('myresumes', [ResumeController::class, 'index'])->name('resume.index');
    Route::get('resume/{resume}', [ResumeController::class, 'show'])->name('resume.show');
    Route::get('resume', [ResumeController::class, 'create'])->name('resume.create');
    Route::post('resume', [ResumeController::class, 'store'])->name('resume.store');
    Route::put('resume/{resume}', [ResumeController::class, 'update'])->name('resume.update');
    Route::delete('resume/{resume}', [ResumeController::class, 'destroy'])->name('resume.destroy');
});

require __DIR__ . '/auth.php';

Route::resource('vacancy', VacancyController::class);

// пагинация
Route::get('/vacancylist', function () {
    return Vacancy::paginate(3);
});

Route::get('/vacancies/filter', [FilterVacanciesController::class, 'index']);
Route::post('/vacancies/filter', [FilterVacanciesController::class, 'filterVacancy']);
Route::resource('company', CompanyController::class);

