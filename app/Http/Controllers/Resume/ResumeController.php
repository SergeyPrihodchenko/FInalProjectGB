<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use App\Http\Requests\Resume\ResumeStoreRequest;
use App\Models\Resume;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ResumeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resumes = Resume::all();

        return Inertia::render('ResumeList/ResumeListAll', [
            'title' => 'Резюме',
            'resumes' => $resumes
        ]);
    }

    public function getByUser(Request $request): Response
    {
        $user = $request->user();

        $resumes = DB::table('resumes')->where('user_id', $user->id)->get();

        return Inertia::render('ResumeList/ResumeList', [
            'title' => 'Мои резюме',
            'resumes' => $resumes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('ResumeCreate/CreateResume', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ResumeStoreRequest $request): RedirectResponse
    {
        $data = $request->validated();

        Resume::create($data);

        return redirect()->route('resume.myresumes');

    }

    /**
     * Display the specified resource.
     */
    public function show(Resume $resume): Response
    {
        $author = $resume->user;

        return Inertia::render('ResumePage/ResumePage', [
            'title' => $resume->profession,
            'resume' => $resume,
            'author' => $author
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resume $resume): Response
    {
        return Inertia::render('ResumeUpdate/ResumeUpdate', [
            'title' => $resume->profession,
            'resume' => $resume
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ResumeStoreRequest $request, Resume $resume): RedirectResponse
    {
        $data = $request->validated();

        $resume->update($data);

        return redirect()->route('resume.myresumes');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resume $resume): RedirectResponse
    {
        $resume->delete();

        return redirect()->route('resume.myresumes');
    }
}
