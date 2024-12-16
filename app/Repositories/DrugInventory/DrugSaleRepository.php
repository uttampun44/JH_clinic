<?php

namespace App\Repositories\DrugInventory;

use App\Models\DrugSale;

class DrugSaleRepository
{
    /**
     * Create a new class instance.
     */
    public function __construct(public DrugSale $drugSale)
    {
        
    }

    public function index()
    {

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
