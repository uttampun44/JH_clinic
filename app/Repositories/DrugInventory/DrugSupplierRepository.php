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
       return DrugSupplier::paginate(25);   
    }

    public function store(array $data): DrugSupplier
    {

        return $this->drugSupplier->create($data);
        
    }

    public function edit(DrugSupplier $drugSupplier)
    {
        return $drugSupplier;
    }

    public function update(DrugSupplier $drugSale, array $data): bool
    {

        return $drugSale->update($data);
        
    }
}
