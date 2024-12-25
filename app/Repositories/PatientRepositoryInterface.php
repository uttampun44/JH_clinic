<?php

namespace App\Repositories;

use App\Models\Patient;

interface PatientRepositoryInterface {
    public function store(array $data):Patient;

    public function getPatients();
    
    public function editPatients(Patient $patient):Patient;

    public function update(Patient $patient, array $data):bool;

    public function destroyPatients(Patient $patient);
}