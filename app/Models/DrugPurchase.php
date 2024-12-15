<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DrugPurchase extends Model
{
    protected $table = "drug_purchases";

    protected $fillable = [
        'drug_id',
        'supplier_id',
        'drug_category_id',
        'category_id',
        'quantity',
        'purchase_price',
        'purchase_date'
    ];

    public function drugs(): BelongsTo
    {
        return $this->belongsTo(Drug::class, 'drug_id');
    }

    public function supplier(): BelongsTo
    {
        return $this->belongsTo(DrugSupplier::class, 'supplier_id');
    }

    public function drug_category(): BelongsTo
    {
        return $this->belongsTo(DrugCategory::class, 'drug_category_id');
    }
}
