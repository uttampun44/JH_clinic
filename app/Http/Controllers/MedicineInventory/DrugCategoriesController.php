<?php

namespace App\Http\Controllers\MedicineInventory;

use App\Http\Controllers\Controller;
use App\Http\Requests\DrugCategoryRequest;
use App\Models\DrugCategory;
use App\Repositories\DrugCategoryRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DrugCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(public DrugCategoryRepositoryInterface $drugCategory)
    {
        $this->drugCategory = $drugCategory;
    }

    public function index()
    {
        $drug_categories =  $this->drugCategory->index();

        return Inertia::render('MedicineInventory/DrugCategory/Index', compact('drug_categories'));
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
    public function store(DrugCategoryRequest $request)
    {
       
        try {
            $data = $request->validated();

            $this->drugCategory->store($data);

            return redirect()->back();
        } catch (\Throwable $th) {
           Log::error('Unable to create Drug Category' . $th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(DrugCategory $drugCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DrugCategory $drugCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DrugCategoryRequest $request, DrugCategory $drugCategory)
    {
       
        try {
            $data = $request->validated();

           $this->drugCategory->update($drugCategory, $data);
           return redirect()->back();

        } catch (\Throwable $th) {
            Log::error('Unable to update' . $th->getMessage());

        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DrugCategory $drugCategory)
    {
        //
    }
}
