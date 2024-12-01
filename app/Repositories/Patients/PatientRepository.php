<?php

namespace App\Repositories\Patients;
use App\Models\Patient;
use App\Repositories\PatientRepositoryInterface;

class PatientRepository implements PatientRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct(public Patient $patient)
    {
        //
    }

    public function store(array $data):Patient
    {

        $patients = $this->patient->create($data);

        return $patients;
    }

    public function getPatients() 
    {
        return $this->patient->all();
    }
}
