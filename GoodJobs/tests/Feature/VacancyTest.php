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
        $this->get('/vacancy')->assertInertia(fn(Assert $page) => $page
            ->component('Vacancy/Index')
        );
    }

    public function test_can_view_vacancy_detail()
    {
        $vacancy = Vacancy::create([
            'title' => 'tester',
            'payment' => 10000,
            'experience' => 10,
        ]);

        $this->get('/vacancy/1')
            ->assertInertia(fn(Assert $page) => $page
                ->component('VacancyPage/ui/VacancyPage/VacancyPage')
                ->has('vacancy', fn(Assert $page) => $page
                    ->where('id', $vacancy->id)
                    ->where('title', 'tester')
                    ->where('payment', '10000')
                    ->where('experience', '10')
                    ->etc()
                )
            );
    }
    
    public function test_can_create_a_new_vacancy()
    {
        $this->post('/vacancy', [
            'title' => 'post vacancy test',
            'payment' => 10000,
            'experience' => 10,
        ]);

        $vacancy = Vacancy::all();

        $this->get('/vacancy/' . $vacancy[0]->id)
            ->assertInertia(fn(Assert $page) => $page
                ->component('VacancyPage/ui/VacancyPage/VacancyPage')
                ->has('vacancy', fn(Assert $page) => $page
                    ->where('id', $vacancy[0]->id)
                    ->where('title', 'post vacancy test')
                    ->where('payment', '10000')
                    ->where('experience', '10')
                    ->etc()
                )
            );
    }
}
