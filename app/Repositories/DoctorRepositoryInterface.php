<?php 

namespace App\Repositories;

use App\Models\Doctor;

interface DoctorRepositoryInterface{
    public function index();

    public function store(array $data):Doctor;

    public function edit(Doctor $doctor);

    public function update(Doctor $doctor, array $data):bool;

    public function destroy(Doctor $doctor);
    
}
