<?php

namespace App\Http\Controllers\MedicineInventory;

use App\Http\Controllers\Controller;
use App\Http\Requests\DrugSupplierRequest;
use App\Models\DrugSale;
use App\Models\DrugSupplier;
use App\Repositories\DrugSupplierInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DrugSaleController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function __construct(public DrugSupplierInterface $drugSupplierInterface)
     {
        $this->DrugSupplierInterface = $drugSupplierInterface;
     }
    public function index()
    {
        //
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

            return $this->drugSupplierInterface->store($data);
        } catch (\Throwable $th) {
            Log::error('Cannont Create' . $th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(DrugSale $drugSale)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DrugSale $drugSale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DrugSale $drugSale)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DrugSale $drugSale)
    {
        //
    }
}
