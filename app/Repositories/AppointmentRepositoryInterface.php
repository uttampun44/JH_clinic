<?php 

namespace App\Repositories;

use App\Models\Appointment;

interface AppointmentRepository{

    public function index();

    public function store(array $data ):Appointment;

    public function edit();

    public function update(Appointment $appointment, array $data):bool;

}