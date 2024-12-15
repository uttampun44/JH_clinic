<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DrugStock extends Model
{
    protected $table = "drug_stocks";

    protected $fillable = ['drug_id', 'quantity'];
}
