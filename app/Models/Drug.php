<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Drug extends Model
{
    use HasFactory;
    
    protected $table = 'drugs';

    protected $fillable = ['name', 'sku', 'description', 'manufacturer', 'dosage_from', 'strength',
    'expiration_date', 'drug_category_id'];

    public function drugs_categories():BelongsTo
    {
        return $this->belongsTo(DrugCategory::class, 'drug_category_id');
    }

    public function supplier():HasMany
    {
        return $this->hasMany(DrugSupplier::class, 'supplier_id');
    }
}
