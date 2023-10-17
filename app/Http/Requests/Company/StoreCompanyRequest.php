<?php

namespace App\Http\Requests\Company;

use Illuminate\Foundation\Http\FormRequest;

class StoreCompanyRequest extends FormRequest
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
            'email' => ['sometimes' ],
            'name'=> ['required' ],
            'business_profile'=> ['sometimes' ],
            'website'=> ['sometimes' ],
            'region_of_location'=> ['sometimes' ],
            'date_create'=> ['sometimes' ],
            'phone_number'=> ['sometimes' ],
            'description'=> ['sometimes' ],
           
        ];
    }
}
