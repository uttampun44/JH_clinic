<?php

namespace App\Http\Controllers\MedicineInventory;

use App\Http\Controllers\Controller;
use App\Models\Drug;
use APP\Repositories\DrugRepositoryInterface;
use App\Repositories\DrugsRepositoryInterface;
use Illuminate\Http\Request;
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
        $data = $this->drugRepositoryInterface->index();

        
        return Inertia::render('MedicineInventory/Drugs/Index', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories =  $this->drugRepositoryInterface->create();

        return Inertia::render('MedicineInventory/Drugs/Create', compact('categories'));
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
    public function show(Drug $drug)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Drug $drug)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Drug $drug)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Drug $drug)
    {
        //
    }
}
