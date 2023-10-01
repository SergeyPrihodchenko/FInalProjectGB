<?php

namespace Tests;

use App\Enums\EmploymentType;
use App\Enums\Experience;
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
        return Vacancy::create([
            'title' => 'tester',
            'payment' => '200',
            'employment' => EmploymentType::fullTimeJob->value,
            'description' => '007 desciption post vacancy',
            'experience' => Experience::no_experiance->value,
            'contacts' => json_encode(['89990-01','director']),
            'requirements' => json_encode(['быть трезвым','be coll','be smart']),
            'responsibilities' => json_encode(['js', 'php', 'any']),
            'conditions' => json_encode(['в кондиции', 'worker', 'cool']),
            'skills' => json_encode(['работящий', 'овтественный']),
            'reviews' => json_encode(['норм тема', 'super', 'class']),
            'company_id' => $this->createCompany()->id,
        ]);
    }
}
