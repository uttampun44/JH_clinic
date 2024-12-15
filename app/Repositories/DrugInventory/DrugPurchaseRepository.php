<?php

namespace App\Repositories\DrugInventory;

use App\Models\Drug;
use App\Models\DrugCategory;
use App\Models\DrugPurchase;
use App\Models\DrugStock;
use App\Models\DrugSupplier;
use App\Repositories\DrugPurchaseRepositoryInterface;

class DrugPurchaseRepository implements DrugPurchaseRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct(public DrugPurchase $drugPurchase)
    {
        //
    }

    public function index()
    {
        return $this->drugPurchase->index();
    }

    public function create()
    {
        $drugs = Drug::select('id', 'name')->get();
        $suppliers = DrugSupplier::select('id', 'name')->get();
        $drug_categories = DrugCategory::select('id', 'name')->get();

        return [
            'drugs' => $drugs,
            'suppliers' => $suppliers,
            'drug_categories' => $drug_categories
        ];
    }

    public function store(array $data): DrugPurchase
    {
        foreach ($data as $purchase) {
            for ($i = 0; $i < $purchase['quantity']; $i++) {
                DrugStock::createOrUpdate([
                    'drug_id' => $purchase['drug_id'],
                    'quantity' => 1
                ]);
            }
        }
        return $this->drugPurchase->create($data);
    }

    public function edit(DrugPurchase $drugPurchase): DrugPurchase
    {
        return $drugPurchase;
    }

    public function update(DrugPurchase $drugPurchase, array $data): bool
    {
        return $drugPurchase->update($data);
    }
}
