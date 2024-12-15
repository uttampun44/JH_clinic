<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DrugSupplier extends Model
{
    protected $table = 'drug_suppliers';
    protected $fillable = ['name', 'contact_person', 'phone', 'email', 'address'];
}
