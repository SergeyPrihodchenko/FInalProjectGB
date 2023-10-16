<?php

namespace App\Http\Requests\Vacancy;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
            'title' => ['required', 'string'],
            'city_id' => ['sometimes'],
            'city_work_id' => ['sometimes'],
            'payment' => ['sometimes'], // зарплата
            'employment' => ['sometimes'], // тип работы (полный день...)
            'description' => ['sometimes'], // описание
            'experience' => ['sometimes'], // опыт
            'contacts' => ['sometimes'], // контакты
            'requirements' => ['sometimes'], // требования
            'responsibilities' => ['sometimes'], // обязанности
            'conditions' => ['sometimes',], // условия
            'skills' => ['sometimes'], // навыки
            'reviews' => ['sometimes'], // отзывы
            'company_id' => ['sometimes'], // компания
            'schedule' => ['sometimes'], //график работы
        ];
    }
}
