<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use App\Models\UserLikeVacancies;
use App\Models\Vacancy;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{

    public function index()
    {
        $user_id = auth()->id();
        $likes = UserLikeVacancies::getVacancyIdArray(auth()->id());
        $like_vacancy = UserLikeVacancies::where('user_id', $user_id)->get('vacancy_id')->toArray();
        
        $likesArr = array_values($like_vacancy);

        $vacancies = Vacancy::whereIn('vacancies.id',$likesArr)
          ->join('cities', 'vacancies.city_id', '=', 'cities.id')
            ->join('companies', 'vacancies.company_id', '=', 'companies.id')
            ->select('vacancies.id as id', 'vacancies.title as title', 'vacancies.payment as payment', 'vacancies.employment as employment', 'vacancies.schedule as schedule', 'vacancies.experience as experience', 'companies.name as conditions', 'cities.title as city', 'vacancies.description as description')
            ->get();
        return Inertia::render('ProfilePage/ProfilePage', ['favourite_vacancies' => $vacancies, 'likes'=> $likes]);
    }
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('ProfilePage/ProfilePage', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {

        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
