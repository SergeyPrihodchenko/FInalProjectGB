<?php

namespace Tests\Feature;

use App\Enums\EmploymentType;
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

        $response = $this->actingAs($user)->get(route('resume.myresumes'));

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
            'experience' => 'нет опыта',
            'skills' => ['Economy'],
            'educational_institute' => [['title' => 'Универ', 'faculty' => 'мат', 'specialization' => 'физика', 'start_year' => '2016-02-02', 'graduation_year' => '2000-02-02']],
            'salary' => '100000',
            'employment_type' => 'Удаленая работа',
            'schedule_type' => 'Полная занятость',
            'relocation' => 'Возможно',
            'buisness_travel' => 'Готов',
            'about_me' => 'Some text  about yourself'
        ]);

        $response->assertSessionHasNoErrors();
        $response->assertRedirect(route('resume.myresumes'));
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
            'experience' => 'нет опыта',
            'skills' => ['Economy'],
            'educational_institute' => [['title' => 'Универ', 'faculty' => 'мат', 'specialization' => 'физика', 'start_year' => '2016-02-02', 'graduation_year' => '2020-02-02']],
            'salary' => '100000',
            'employment_type' => 'Удаленая работа',
            'schedule_type' => 'Полная занятость',
            'relocation' => 'Возможно',
            'buisness_travel' => 'Готов',
            'about_me' => 'Some text  about yourself'
        ]);

        $response->assertSessionHasNoErrors();
        $response->assertRedirect(route('resume.myresumes'));

        $resume->refresh();

    }
}