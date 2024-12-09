<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Appointment extends Model
{
    protected $table = "appointments";
    protected $fillable = ['patient_id', 'doctor_id', 'appointment_date', 'appointment_time', 'status'];

    public function patient():BelongsTo
    {
       return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function doctors():BelongsTo
    {
        return $this->belongsTo(Doctor::class, 'doctor_id');
    }
}
