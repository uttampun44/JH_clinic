<?php

namespace App\Repositories\DrugInventory;

use App\Models\Drug;
use App\Models\DrugSale;
use App\Repositories\DrugSaleRepositoryInterface;

class DrugSaleRepository implements DrugSaleRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct(public DrugSale $drugSale)
    {
        
    }

    public function index()
    {
        return Drug::select('id', 'name')->get();

    }

    public function store(array $data):DrugSale
    {
        return $this->drugSale->create($data);
    }

    public function edit(DrugSale $drugSale):DrugSale
    {
        return $drugSale;
    }

    public function update(DrugSale $drugSale, array $data):bool
    {
        return $drugSale->update($data);
    }
}
