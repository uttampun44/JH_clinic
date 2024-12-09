<?php

namespace App\Repositories\Appointments;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Patient;
use App\Repositories\AppointmentRepositoryInterface;
use Illuminate\Support\Facades\Log;

class AppointmentRepository implements AppointmentRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct(public Appointment $appointment)
    {
        //
    }

    public function index()
    {
       return Appointment::paginate(50);
    }

    public function store(array $data):Appointment
    {
        Log::error('error', $data);
        $data['appointment_time'] = now()->format('H:i');
        
        return $this->appointment->create($data);
    }

    public function edit(Appointment $appointment)
    {
       return $appointment;
    }
    public function update(Appointment $appointment, array $data):bool
    {
       return $this->appointment->update($data);
    }
}
