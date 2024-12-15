<?php

namespace App\Repositories\DrugInventory;

use App\Models\DrugSale;
use App\Models\DrugSupplier;
use App\Repositories\DrugSupplierInterface;

class DrugSupplierRepository implements DrugSupplierInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct(public DrugSupplier $drugSupplier)
    {
        
    }

    public function index()
    {
        
    }

    public function store(array $data): DrugSupplier
    {

        return $this->drugSupplier->create($data);
        
    }

    public function edit(DrugSale $drugSale)
    {
        return $drugSale;
    }

    public function update(DrugSale $drugSale, array $data): bool
    {

        return $drugSale->update($data);
        
    }
}
