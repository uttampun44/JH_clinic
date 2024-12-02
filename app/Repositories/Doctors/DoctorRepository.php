<?php

namespace App\Repositories\Doctors;

use App\Models\Doctor;
use App\Repositories\DoctorRepositoryInterface;

class DoctorRepository implements DoctorRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct(public Doctor $doctor)
    {
        //
    }

    public function getAllDoctors()
    {
       return $this->doctor->all();
    }
}
