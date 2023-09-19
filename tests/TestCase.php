<?php

namespace Tests;

use App\Enums\EmploymentType;
use App\Models\Company;
use App\Models\Vacancy;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    public function createCompany()
    {
        return Company::create([
            'name' => 'ООО Дашковка'
        ]);
    }

    public function createVacancy()
    {
       return  Vacancy::create([
           'title' => 'tester',
           'payment' => '200',
           'employment' => EmploymentType::fullTimeJob->value,
           'description' => '007 desciption post vacancy',
           'experience' => 1,
           'contacts' => '89990-01',
           'requirements' => 'быть трезвым',
           'responsibilities' => 'any',
           'conditions' => 'в кондиции',
           'skills' => 'работящий',
           'reviews' => 'норм тема',
           'company_id' => $this->createCompany()->id,
       ]);
    }
}
