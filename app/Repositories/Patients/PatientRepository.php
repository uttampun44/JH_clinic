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

    public function getPatients() 
    {
        return Patient::paginate(50);
    }
    public function store(array $data):Patient
    {

        return $this->patient->create($data);
    }


    public function editPatients(Patient $patient): Patient
    {
        return $patient;
    }
   
    public function update(Patient $patient, array $data): bool
    {
        return $this->patient->update($data);
    }
    public function destroyPatients(Patient $patient)
    {
        return $patient->delete();
    }
}
