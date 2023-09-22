<?php

namespace Feature;

use App\Enums\EmploymentType;
use App\Models\Vacancy;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class VacancyTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->company = $this->createCompany();
        $this->vacancy = $this->createVacancy();
    }

    public function test_index_return_page_is_vacancy_index(): void
    {
        $this->get(route('vacancy.index'))->assertInertia(
            fn (Assert $page) => $page
                ->component('Vacancy/Index')
        );
    }

    public function test_can_view_vacancy_detail()
    {
        $this->get(route('vacancy.show', $this->vacancy->id))
            ->assertInertia(
                fn (Assert $page) => $page
                    ->component('VacancyPage/ui/VacancyPage/VacancyPage')
                    ->has(
                        'vacancy',
                        fn (Assert $page) => $page
                            ->where('id', $this->vacancy->id)
                            ->where('title', $this->vacancy->title)
                            ->where('payment', $this->vacancy->payment)
                            ->where('employment', $this->vacancy->employment)
                            ->where('description', $this->vacancy->description)
                            ->where('experience', $this->vacancy->experience)
                            ->where('contacts',  $this->vacancy->contacts)
                            ->where('requirements',  $this->vacancy->requirements)
                            ->where('responsibilities',  $this->vacancy->responsibilities)
                            ->where('conditions',  $this->vacancy->conditions)
                            ->where('skills',  $this->vacancy->skills)
                            ->where('reviews',  $this->vacancy->reviews)
                            ->where('company_id',  $this->vacancy->company_id)
                            //datetime
                            ->etc()
                    )
            );
    }
    public function test_can_create_a_new_vacancy()
    {
        $this->post(route('vacancy.store', [
            'title' => 'tester create',
            'payment' => 2000,
            'employment' => EmploymentType::fullTimeJob->value,
            'description' => '007 desciption post vacancy',
            'experience' => 1,
            'contacts' => '89990-01',
            'requirements' => 'быть трезвым',
            'responsibilities' => 'any',
            'conditions' => 'в кондиции',
            'skills' => 'работящий',
            'reviews' => 'норм тема',
            'company_id' => $this->company->id
        ]));

        $vacancy = Vacancy::where('title', 'tester create')->get();

        $this->get(route('vacancy.show', $vacancy[0]->id))
            ->assertInertia(
                fn (Assert $page) => $page
                    ->component('VacancyPage/ui/VacancyPage/VacancyPage')
                    ->has(
                        'vacancy',
                        fn (Assert $page) => $page
                            ->where('id', $vacancy[0]->id)
                            ->where('title', $vacancy[0]->title)
                            ->where('payment', $vacancy[0]->payment)
                            ->where('employment', $vacancy[0]->employment)
                            ->where('description', $vacancy[0]->description)
                            ->where('experience', $vacancy[0]->experience)
                            ->where('contacts',  $vacancy[0]->contacts)
                            ->where('requirements',  $vacancy[0]->requirements)
                            ->where('responsibilities',  $vacancy[0]->responsibilities)
                            ->where('conditions',  $vacancy[0]->conditions)
                            ->where('skills',  $vacancy[0]->skills)
                            ->where('reviews',  $vacancy[0]->reviews)
                            ->where('company_id',  $vacancy[0]->company_id)
                            //datetime
                            ->etc()
                    )
            );
    }

    public function test_can_delete_vacancy()
    {
        $this->delete(route('vacancy.destroy', $this->vacancy->id));

        $this->assertDatabaseMissing('vacancies', [
            'id' => $this->vacancy->id,
            'title' => $this->vacancy->title
        ]);
    }

    public function test_vacancy_create_page_is_working()
    {
        $this->get(route('vacancy.create'))->assertInertia(
            fn (Assert $page) => $page
                ->component('VacancyPageCreate/ui/VacancyPageCreate/VacancyPageCreate')
        );
    }
}
