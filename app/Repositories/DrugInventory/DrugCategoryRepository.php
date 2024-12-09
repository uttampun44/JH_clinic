<?php

namespace App\Repositories\DrugInventory;

use App\Models\DrugCategory;
use App\Repositories\DrugCategoryRepositoryInterface;
use Illuminate\Support\Facades\Log;

class DrugCategoryRepository implements DrugCategoryRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct(public DrugCategory $drugCategory)
    {
        
    }
    public function index()
    {
        return DrugCategory::paginate(25);
    }

    public function store(array $data):DrugCategory
    {
        return $this->drugCategory->create($data);
    }

    public function edit(DrugCategory $drugCategory)
    {
       return $this->drugCategory;
    }

    public function update(DrugCategory $drugCategory, array $data): bool
    {
      
        return $drugCategory->update($data);
    }
}
