<?php

use App\Http\Controllers\Main\MainController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Vacancy\VacancyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [MainController::class, 'index'])->name('main');

Route::get('/profilePage', function () {
    return Inertia::render('ProfilePage/ProfilePage');
})->middleware(['auth', 'verified'])->name('profilePage');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

Route::resource('vacancy', VacancyController::class);