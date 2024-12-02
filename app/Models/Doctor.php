<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
  protected $table = "doctors";
  protected $fillable = ['first_name', 'last_name', 'specialization', 'contact_number', 'address', 'gender'];
}
