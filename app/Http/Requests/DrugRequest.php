<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DrugRequest extends FormRequest
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
            'name' => 'required',
            'sku' => 'required',
            'description' => 'required',
            'manufacturer' => 'required',
            'dosage_from' => 'required',
            'strength' => 'required',
            'expiration_date' => 'required|date',
            'drug_category_id' => 'required',

        ];
    }
}
