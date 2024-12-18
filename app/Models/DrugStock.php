<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DrugStock extends Model
{
    protected $table = "drug_stocks";

    protected $fillable = ['purchase_id', 'quantity'];

    public function drugPurchase():BelongsTo
    {
        return $this->belongsTo(DrugPurchase::class, 'purchase_id');
    }
}
