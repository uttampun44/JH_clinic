<?php

namespace App\Http\Controllers\MedicineInventory;

use App\Http\Controllers\Controller;
use App\Models\DrugSale;
use App\Repositories\DrugSupplierInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DrugSaleController extends Controller
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
        return Inertia::render('MedicineInventory/Sales/Index');
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
