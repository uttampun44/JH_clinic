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

    public function index()
    {
       return Doctor::paginate(25);
    }

    public function store(array $data):Doctor
    {
        return $this->doctor->create($data);
    }

    public function edit(Doctor $doctor):Doctor
    {
        return $doctor;
    }

    public function update(Doctor $doctor, array $data):bool
    {
          return $doctor->update($data);
    }

    public function destroy(Doctor $doctor)
    {
      return $doctor->delete();
    }
}
