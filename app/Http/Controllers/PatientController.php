<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatientRequest;
use App\Models\Patient;
use App\Repositories\PatientRepositoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller
{

    public function __construct(public PatientRepositoryInterface $patientRespository)
    {
        
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $patients =  $this->patientRespository->getPatients();

        return Inertia::render("Patients/Index", [
            'patients' => $patients
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PatientRequest $request)
    {
        // dd($request);
        $patientData = $request->validated();

        $this->patientRespository->store($patientData);

        return redirect()->route('patients.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Patient $patient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Patient $patient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Patient $patient)
    {
        //
    }
}
