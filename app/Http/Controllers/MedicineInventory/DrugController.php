<?php

namespace App\Http\Controllers\MedicineInventory;

use App\Http\Controllers\Controller;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Requests\DrugRequest;
use App\Models\Drug;
use App\Models\DrugCategory;
use App\Repositories\DrugsRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DrugController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(public DrugsRepositoryInterface $drugRepositoryInterface)
    {
        $this->drugRepositoryInterface = $drugRepositoryInterface;
    }
    public function index()
    {
        $drugs = $this->drugRepositoryInterface->index();

        return Inertia::render('MedicineInventory/Drugs/Index', compact('drugs'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories =  $this->drugRepositoryInterface->getData();

        return Inertia::render('MedicineInventory/Drugs/Create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DrugRequest $drug)
    {

        try {
            
            $data = $drug->validated();
        

             $this->drugRepositoryInterface->store($data);

            return redirect()->back();;
        } catch (\Throwable $th) {
           Log::error('Create unsuccessfull', [
             'message' => $th->getMessage(),
             'data' => isset($data) ? $data : 'Data not available',
           ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Drug $drug)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Drug $drug)
    {
        $categories = DrugCategory::select('id', 'name')->get();

        return Inertia::render('MedicineInventory/Drugs/Edit', compact('drug', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DrugRequest $request, Drug $drug)
    {
        
        try {
            $data = $request->validated();


         $this->drugRepositoryInterface->update($drug, $data);
         return redirect()->route('drugs.index')->with('success', 'Drug updated successfully.');

        } catch (\Throwable $th) {
           Log::error('Cannot Update' .$th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Drug $drug)
    {
        //
    }
}
