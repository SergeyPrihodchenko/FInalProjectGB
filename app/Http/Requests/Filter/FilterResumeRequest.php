<?php

namespace App\Http\Requests\Filter;

use Illuminate\Foundation\Http\FormRequest;

class FilterResumeRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'filterData.experience' => 'array|nullable|between:0,50',
            'filterData.salary' => 'numeric|nullable',
            'filterData.relocation' => 'string|nullable',
            'filterData.employment_type' => 'array|nullable',
            'filterData.schedule_type' => 'array|nullable',
            'filterData.buisness_travel' => 'string|nullable',
            'filterData.search' => 'string|nullable',
        ];
    }
}
