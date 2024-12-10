<?php

namespace App\Repositories\DrugInventory;

use App\Models\Drug;
use App\Models\DrugCategory;
use App\Repositories\DrugsRepositoryInterface;

class DrugsRepository implements DrugsRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct(public Drug $drug)
    {
        //
    }

    public function index()
    {
       return Drug::Paginate(25);
    }

    public function create()
    {
        $drug_cat = DrugCategory::select('id', 'name')->get();
      
        return [
            'drug_categories' => $drug_cat
        ];
    }

    public function store(array $data):Drug
    {
        return $this->drug->create($data);
    }

    public function edit(Drug $drug):Drug
    {
        return $drug;
    }

    public function update(Drug $drug, array $data): bool
    {
        return $this->drug->update($data);
    }

    public function delete(Drug $data)
    {
        return $this->drug->delete();
    }
}
