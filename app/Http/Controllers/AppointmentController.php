<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Repositories\Appointments\AppointmentRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(public AppointmentRepository $appointment)
    {
        $this->appointment = $appointment;
        
    }
    public function index()
    {
       
        $appointments =  $this->appointment->index();

        return Inertia::render("Appointments/Index", compact('appointments'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Appointment $appointment, Request $request)
    {
        $validation = $request->validated();

        return $this->appointment->store($validation);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Appointment $appointment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        //
    }
}
