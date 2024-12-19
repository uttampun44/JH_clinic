<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DrugSale extends Model
{
    protected $table = "drug_sales";
    protected $fillable =['drug_id', 'quantity', 'sale_price', 'sale_date'];
}
