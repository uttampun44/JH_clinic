<?php

namespace App\Http\Controllers\MedicineInventory;

use App\Http\Controllers\Controller;
use App\Models\DrugSupplier;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DrugSupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('MedicineInventory/DrugSuppliers/Index');
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(DrugSupplier $drugSupplier)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DrugSupplier $drugSupplier)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DrugSupplier $drugSupplier)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DrugSupplier $drugSupplier)
    {
        //
    }
}
