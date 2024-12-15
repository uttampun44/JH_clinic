<?php

namespace App\Http\Controllers\MedicineInventory;

use App\Http\Controllers\Controller;
use App\Http\Requests\DrugSupplierRequest;
use App\Models\DrugSupplier;
use App\Repositories\DrugSupplierInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DrugSupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(public DrugSupplierInterface $drugSupplierInterface)
    {
       $this->drugSupplierInterface = $drugSupplierInterface;
    }

    public function index()
    {
        $suppliers = $this->drugSupplierInterface->index();

        return Inertia::render('MedicineInventory/DrugSuppliers/Index', compact('suppliers'));
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
    public function store(DrugSupplierRequest $request)
    {
      
        try {
            $data = $request->validated();


            $this->drugSupplierInterface->store($data);
            return redirect()->back();
            
        } catch (\Throwable $th) {
            Log::error('Cannont Create' . $th->getMessage());
        }
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
