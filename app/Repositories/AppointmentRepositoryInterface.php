<?php 

namespace App\Repositories;

use App\Models\Appointment;

interface AppointmentRepositoryInterface{

    public function index();

    public function store(array $data ):Appointment;

    public function edit(Appointment $appointment);

    public function update(Appointment $appointment, array $data):bool;

}