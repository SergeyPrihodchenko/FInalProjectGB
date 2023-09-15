<?php

namespace App\Http\Requests\Resume;

use App\Enums\EducationLevel;
use App\Enums\GenderType;
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
            'experience' => ['required', 'string'],
        ];
    }
}
