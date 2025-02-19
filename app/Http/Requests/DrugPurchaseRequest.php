<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DrugPurchaseRequest extends FormRequest
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
            'drug_id' => 'required',
        'supplier_id' => 'required',
        'drug_category_id' => 'required',
        'unit_price' => 'required',
        'quantity' => 'required|integer',
        'purchase_price' => 'required',
        'purchase_date' => 'required|date',
        ];
    }
}
