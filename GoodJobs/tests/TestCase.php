<?php

namespace Tests;

use App\Models\Vacancy;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    public function createVacancy ()
    {
       return Vacancy::create([
            'title' => 'tester',
            'description' => '007 desciption post vacancy',
            'payment' => 10000,
            'experience' => 10,
            'contacts' => '89990-01'
        ]);
    }
}
