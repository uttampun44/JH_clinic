<?php

namespace App\Http\Controllers;

use App\Http\Requests\DoctorRequest;
use App\Models\Doctor;
use App\Repositories\DoctorRepositoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function __construct(public DoctorRepositoryInterface $doctorRepository)
     {
        
     }
    public function index()
    {
        $doctors = $this->doctorRepository->index();

        // dd("hello doctors", $doctors);

        return Inertia::render("Doctor/Index",[
            'doctors' => $doctors
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
    public function store(DoctorRequest $request)
    {
        $doctor = $request->validated();

        $this->doctorRepository->store($doctor);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Doctor $doctor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Doctor $doctor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DoctorRequest $request, Doctor $doctor)
    {
        $validate = $request->validated();

        $this->doctorRepository->update($doctor, $validate);

         return redirect()->route('doctors.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Doctor $doctor)
    {
        if($doctor)
        {
            $doctor->delete();
        }

        return redirect()->route('doctors.index');
        
    }
}
