<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DrugCategory extends Model
{
    protected $table = "drug_categories";
    protected $fillable = ['name', 'description'];
}
