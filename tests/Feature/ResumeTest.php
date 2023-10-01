<?php

namespace Tests\Feature;

use App\Models\Resume;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ResumeTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_resume_list_page_is_displayed(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get(route('resume.index'));

        $response->assertSessionHasNoErrors();

        $response->assertOk();
    }

    public function test_user_resume_create_page_is_displayed(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get(route('resume.create'));

        $response->assertSessionHasNoErrors();

        $response->assertOk();
    }

    public function test_user_resume_show_page_is_displayed(): void
    {
        $user = User::factory()->create();

        $resume = Resume::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)->get(route('resume.show', $resume));

        $response->assertSessionHasNoErrors();

        $response->assertOk();
    }

    public function test_user_resume_edit_page_is_displayed(): void
    {
        $user = User::factory()->create();

        $resume = Resume::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)->get(route('resume.edit', $resume));

        $response->assertSessionHasNoErrors();

        $response->assertOk();
    }

    public function test_save_new_resume_to_database(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post(route('resume.store'), [
            'user_id' => $user->id,
            'profession' => 'Disigner',
            'first_name' => 'John',
            'last_name' => 'Smith',
            'gender' => 'Мужской',
            'region' => 'USA',
            'date_of_birth' => '2000-02-02',
            'phone' => '59991113322',
            'citizenship' => 'USA',
            'work_permit' => 'USA',
            'education' => 'Высшее образование',
            'experience' => 'менее года',
            'skills' => ['Economy'],
            'educational_institute' => [['title' => 'Универ', 'faculty' => 'мат', 'specialization' => 'физика', 'graduation_year' => '2000-02-02']]
        ]);

        $response->assertSessionHasNoErrors();
        $response->assertRedirect(route('resume.index'));
    }

    public function test_resume_can_be_updated(): void
    {
        $user = User::factory()->create();

        $resume = Resume::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)->put(route('resume.update', $resume), [
            'user_id' => $user->id,
            'profession' => 'Disigner',
            'first_name' => 'John',
            'last_name' => 'Smith',
            'gender' => 'Мужской',
            'region' => 'USA',
            'date_of_birth' => '2000-02-02',
            'phone' => '59991113322',
            'citizenship' => 'USA',
            'work_permit' => 'USA',
            'education' => 'Высшее образование',
            'experience' => 'менее года',
            'skills' => ['Economy'],
            'educational_institute' => [['title' => 'Универ', 'faculty' => 'мат', 'specialization' => 'физика', 'graduation_year' => '2000-02-02']]
        ]);

        $response->assertSessionHasNoErrors();
        $response->assertRedirect(route('resume.index'));

        $resume->refresh();

    }
}