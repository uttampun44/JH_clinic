<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Drug extends Model
{
    protected $table = "drugs";

    protected $fillable = ['name', 'sku', 'description', 'manufacturer', 'dosage_from', 'strength', 'unit_price',
    'expiration_date', 'drug_category_id'
];
}
