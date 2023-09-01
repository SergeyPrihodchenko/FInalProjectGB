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
        $date = Carbon::now();

        $stringDate = $date->toDateTimeString();

        $date = date('Y-m-d H:i:s');


        $vacancy = Vacancy::create([
            'name' => 'tester',
            'description' => 'The Laravel Podcast brings you Laravel and PHP development news and discussion.',
            'created_at' => $date,
            'updated_at' => $date,
        ]);


        $this->get('/vacancy/1')
            ->assertInertia(fn(Assert $page) => $page
                ->component('Vacancy/Show')
                ->has('vacancy', fn(Assert $page) => $page
                    ->where('id', $vacancy->id)
                    ->where('name', 'tester')
                    ->where('description', 'The Laravel Podcast brings you Laravel and PHP development news and discussion.')
                    ->where('created_at',$stringDate)
                    ->where('updated_at', $stringDate)
                )
            );
    }
}
