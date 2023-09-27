<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FilterRequest extends FormRequest
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
            'filterData' => 'array:employment,schedule,city_id,experience,title,payment|required|between:0,6',
            'filterData.employment' => 'array|nullable|between:0,10',
            'filterData.schedule' => 'array|nullable|between:0,10',
            'filterData.city_id' => 'array|nullable|between:0,50',
            'filterData.experience' => 'string|nullable|between:0,50',
            'filterData.title' => 'string|nullable|between:0,50',
            'filterData.payment' => 'integer|nullable|between:0,9999999|numeric',
        ];
    }
}
