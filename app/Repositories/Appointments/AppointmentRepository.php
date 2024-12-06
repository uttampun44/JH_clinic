<?php

namespace App\Repositories\Appointments;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Patient;


class AppointmentRepository
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
        $patients = Patient::select('id', 'first_name')->get();

        $doctors = Doctor::select('id', 'first_name')->get();

        $appointments =  $this->appointment->paginate(25);

        return [
            'patients' => $patients,
            'doctors' => $doctors,
            'appointments' => $appointments
        ];
    }

    public function store(array $data):Appointment
    {
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
