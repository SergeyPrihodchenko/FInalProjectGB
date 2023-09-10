<?php

namespace Tests\Feature;

use App\Models\Company;
use Illuminate\Support\Carbon;
// use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Vacancy;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class CompanyTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_return_page_is_company_index(): void
    {
        $this->get(route('company.index'))->assertInertia(fn(Assert $page) => $page
            ->component('Company/Index')
        );
    }
}
