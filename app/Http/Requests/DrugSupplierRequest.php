<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DrugSupplierRequest extends FormRequest
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
            'contact_person' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'address' => 'required'
        ];
    }
}
