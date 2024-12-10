<?php

namespace App\Http\Controllers;

use App\Enums\StatusEnum;
use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;
use App\Repositories\AppointmentRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(public AppointmentRepositoryInterface $appointment)
    {
        
    }
    public function index()
    {
        $status = array_map(fn($value) => ['id' => $value->name, 'value' => $value->value], StatusEnum::cases());
        
        $appointments =  $this->appointment->index();

        return Inertia::render("Appointments/Index", compact('appointments', 'status'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(AppointmentRequest $appointment)
    {
        try {
            $data = $appointment->validated();
            
            $this->appointment->store($data);
            

            return redirect()->back();
        } catch (\Throwable $th) {
            Log::error('Appointment Error' . $th->getMessage());
    
        }
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
