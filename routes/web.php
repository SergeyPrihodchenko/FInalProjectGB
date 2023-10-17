<?php

use App\Http\Controllers\Vacancy\AcceptVacancyController;
use App\Http\Controllers\Company\CompanyController;
use App\Http\Controllers\Company\ReviewsController;

use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Subscription\SubscriptionController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\Vacancy\FilterVacanciesController;
use App\Http\Controllers\Main\MainController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Resume\FilterResumeController;
use App\Http\Controllers\Resume\ResumeController;
use App\Http\Controllers\StatusResponseResumeController;
use App\Http\Controllers\Vacancy\VacancyController;
use App\Models\Vacancy;
use App\Models\Company;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [MainController::class, 'index'])->name('main');
Route::get('/searchSort', [MainController::class, 'beforeSearchSort']);
Route::get('/category/search', [MainController::class, 'searchSort'])->name('category.sort');

//Route::get('/testPageCompany', function () {
//    return Inertia::render('CompanyPage/ui/CompanyPage/CompanyPage');
//})->name('company');

Route::get('/profilePage',[ProfileController::class, 'index'])->middleware(['auth', 'verified'])->name('profilePage');

//testCompanyCreate
Route::get('/testCompanyCreate', function () {
    return Inertia::render('Company/CreateCompany');
})->name('companyCreate');
Route::get('/testCompanyList', function () {
    return Inertia::render('Company/CompanyList');
})->name('companyList');

//testResumePage
Route::get('/testResumePage', function () {
    return Inertia::render('ResumePage/ResumePage');
})->name('resumePage');


Route::get('/category/sort/{id}', [CategoryController::class, 'show'])->name('category.show');

Route::middleware('auth')->group(function () {


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware('isRolCompany')->group(function() {
        Route::get('/viewed', [StatusResponseResumeController::class, 'viewed'])->name('viewed');
        Route::post('/refusal', [StatusResponseResumeController::class, 'refusal'])->name('refusal');
        Route::post('/invitation', [StatusResponseResumeController::class, 'invitation'])->name('invitation');

//        Route::resource('company', CompanyController::class);
//        Route::get('myCompanies', [\App\Http\Controllers\Company\MyCompaniesController::class, 'index'])->name('myCompanies');
    });

    Route::middleware('isRolCandidate')->group(function() {
        Route::get('resumes', [ResumeController::class, 'index'])->name('resume.index');
        Route::get('myresumes', [ResumeController::class, 'getByUser'])->name('resume.myresumes');
        Route::get('resume/show/{resume}', [ResumeController::class, 'show'])->name('resume.show');
        Route::get('resume/update/{resume}', [ResumeController::class, 'edit'])->name('resume.edit');
        Route::get('resume', [ResumeController::class, 'create'])->name('resume.create');
        Route::post('resume', [ResumeController::class, 'store'])->name('resume.store');
        Route::put('resume/{resume}', [ResumeController::class, 'update'])->name('resume.update');
        Route::delete('resume/{resume}', [ResumeController::class, 'destroy'])->name('resume.destroy');
        Route::get('/PageUserResponses', [AcceptVacancyController::class, 'index'])->name('userResponses');

        Route::post('addLike', [LikeController::class, 'store'])->name('addLike');
        Route::post('deleteLike', [LikeController::class, 'destroy'])->name('deleteLike');
        Route::post('/PageUserResponses/accept', [AcceptVacancyController::class, 'store'])->name('userVacancyAccept');
    });
});

require __DIR__ . '/auth.php';

Route::resource('vacancy', VacancyController::class);

Route::post('/vacancies/filter', [FilterVacanciesController::class, 'filterVacancy']);

Route::post('resume/filter', [FilterResumeController::class, 'filterResumes'])->name('resume.filter');

Route::get('subscribe/{userId}/{companyId}', [SubscriptionController::class, 'subscribe'])->name('subscribe');
Route::get('unsubscribe/{userId}/{companyId}', [SubscriptionController::class, 'unsubscribe'])->name('unsubscribe');
//Route::get('checkSubscription/{userId}/{companyId}', [SubscriptionController::class, 'checkSubscription'])->name('checkSubscription');

Route::resource('company', CompanyController::class);
Route::get('myCompanies', [\App\Http\Controllers\Company\MyCompaniesController::class, 'index'])->name('myCompanies');
Route::resource('reviews', \App\Http\Controllers\Company\ReviewsController::class);
//Route::post('/company/{company}/reviews',[CompanyController::class, 'createReview'])->name('company.reviews.create');
