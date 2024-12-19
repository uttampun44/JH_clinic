<?php

namespace App\Http\Controllers\MedicineInventory;

use App\Http\Controllers\Controller;
use App\Http\Requests\DrugSaleRequest;
use App\Models\DrugSale;
use App\Repositories\DrugSaleRepositoryInterface;
use App\Repositories\DrugSupplierInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DrugSaleController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function __construct(public DrugSaleRepositoryInterface $drugSaleRepositoryInterface)
    {
        $this->drugSaleRepositoryInterface = $drugSaleRepositoryInterface;
    }
    public function index()
    {
        $drugs = $this->drugSaleRepositoryInterface->index();
        return Inertia::render('MedicineInventory/Sales/Index', compact('drugs'));
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
    public function store(DrugSaleRequest $request)
    {
        // dd($request);

        try {
            $data = $request->validated();

            $this->drugSaleRepositoryInterface->store($data);
        } catch (\Throwable $th) {
            Log::error('Unable to create');
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
