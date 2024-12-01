<?php

namespace App\Repositories;

use App\Models\Patient;

interface PatientRepositoryInterface {
    public function store(array $data):Patient;

    public function getPatients();
}