<?php

namespace Tests\Feature;

use Illuminate\Support\Carbon;
// use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Vacancy;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class VacancyTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_return_page_is_vacancy_index(): void
    {
        $this->get(route('vacancy.index'))->assertInertia(fn(Assert $page) => $page
            ->component('Vacancy/Index')
        );
    }

    public function test_can_view_vacancy_detail()
    {
        $vacancy = Vacancy::create([
            'title' => 'tester',
            'description' => '007 desciption post vacancy',
            'payment' => 10000,
            'experience' => 10,
            'contacts' => '89990-01'
        ]);

        $this->get(route('vacancy.show', $vacancy->id))
            ->assertInertia(fn(Assert $page) => $page
                ->component('VacancyPage/ui/VacancyPage/VacancyPage')
                ->has('vacancy', fn(Assert $page) => $page
                    ->where('id', $vacancy->id)
                    ->where('title', 'tester')
                    ->where('description', '007 desciption post vacancy')
                    ->where('payment', '10000')
                    ->where('experience', '10')
                    ->where('contacts', '89990-01')
                    ->etc()
                )
            );
    }
    public function test_can_create_a_new_vacancy()
    {
        $this->post(route('vacancy.store', [
            'title' => 'post vacancy test',
            'description' => '007 desciption post vacancy',
            'payment' => 10000,
            'experience' => 10,
            'contacts' => '89990-01'
        ]));

        $vacancy = Vacancy::all();

        $this->get(route('vacancy.show', $vacancy[0]->id))
            ->assertInertia(fn(Assert $page) => $page
                ->component('VacancyPage/ui/VacancyPage/VacancyPage')
                ->has('vacancy', fn(Assert $page) => $page
                    ->where('id', $vacancy[0]->id)
                    ->where('title', 'post vacancy test')
                    ->where('description', '007 desciption post vacancy')
                    ->where('payment', '10000')
                    ->where('experience', '10')
                    ->where('contacts', '89990-01')
                    ->etc()
                )
            );
    }

    public function test_can_delete_vacancy ()
    {
        $vacancy = Vacancy::create([
            'title' => 'tester',
            'payment' => 10000,
            'experience' => 10,
        ]);

        $this->delete(route('vacancy.destroy' , $vacancy->id));

        $this->assertDatabaseMissing('vacancies', [
            'id' => $vacancy->id,
            'title' => $vacancy->title
        ]);
    }

    public function test_vacancy_create_page_is_working ()
    {
        $this->get(route('vacancy.create'))->assertInertia(fn(Assert $page) => $page
            ->component('Vacancy/CreateVacancy')
        );
    }
}
