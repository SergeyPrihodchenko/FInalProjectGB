<?php

namespace App\Http\Requests\Resume;

use App\Enums\BuisnessTravelStatus;
use App\Enums\EducationLevel;
use App\Enums\EmploymentType;
use App\Enums\Experience;
use App\Enums\GenderType;
use App\Enums\RelocationStatus;
use App\Enums\ScheduleType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class ResumeStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => ['required'],
            'profession' => ['required', 'string', 'min: 3', 'max: 50'],
            'first_name' => ['required', 'string', 'min: 2', 'max: 50'],
            'last_name' => ['required', 'string', 'min: 2', 'max: 50'],
            'gender' => ['required', new Enum(GenderType::class)],
            'region' => ['nullable', 'string'],
            'date_of_birth' => ['required'],
            'phone' => ['nullable', 'numeric'],
            'citizenship' => ['required', 'string'],
            'work_permit' => ['required', 'string'],
            'education' => ['required', new Enum(EducationLevel::class)],
            'skills' => ['required', 'array'],
            'experience' => ['required', new Enum(Experience::class)],
            'educational_institute' => ['required', 'array'],
            'educational_institute.*.title' => ['required', 'string', 'min: 5'],
            'educational_institute.*.faculty' => ['required', 'string', 'min: 2'],
            'educational_institute.*.specialization' => ['required', 'string', 'min: 3'],
            'educational_institute.*.start_year' => ['required'],
            'educational_institute.*.graduation_year' => ['required'],
            'companies' => ['nullable', 'array'],
            'companies.*.name' => ['required', 'string', 'min: 2', 'max: 100'],
            'companies.*.position' => ['required', 'string', 'min: 2', 'max: 50'],
            'companies.*.achievements' => ['required', 'string'],
            'companies.*.start_date' => ['required'],
            'companies.*.end_date' => ['nullable'],
            'salary' => ['nullable', 'max: 10'],
            'employment_type' => ['required', new Enum(EmploymentType::class)],
            'schedule_type' => ['required', new Enum(ScheduleType::class)],
            'relocation' => ['required', new Enum(RelocationStatus::class)],
            'buisness_travel' => ['required', new Enum(BuisnessTravelStatus::class)],
            'about_me' => ['nullable', 'max: 250']
        ];
    }
}
