<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use App\Http\Requests\Resume\ResumeStoreRequest;
use App\Models\Resume;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ResumeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
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
    public function store(ResumeStoreRequest $request)
    {
        $data = $request->validated();

        Resume::create($data);

        return redirect()->route('resume.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(Resume $resume)
    {
        return Inertia::render('ResumeUpdate/ResumeUpdate', [
            'title' => $resume->profession,
            'resume' => $resume
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ResumeStoreRequest $request, Resume $resume)
    {
        $data = $request->validated();

        $resume->update($data);

        return redirect()->route('resume.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resume $resume)
    {
        $resume->delete();

        return redirect()->route('resume.index');
    }
}
