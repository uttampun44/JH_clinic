<?php

namespace App\Repositories\DrugInventory;

use App\Models\Drug;
use App\Models\DrugCategory;
use App\Models\DrugPurchase;
use App\Models\DrugStock;
use App\Models\DrugSupplier;
use App\Repositories\DrugPurchaseRepositoryInterface;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

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
        return DrugPurchase::with([
            'drugs:id,name', 
            'supplier:id,name', 
            'drug_category:id,name', 
           'drugStocks' => function($query){
            $query->select('purchase_id', 'quantity')
            ->groupBy('purchase_id', 'quantity');
           }
           ])->paginate(25);

           
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
        
        return $this->drugPurchase->create($data);
    }

    public function edit(DrugPurchase $drugPurchase, $id): DrugPurchase
    {
       
        return  $this->drugPurchase->with(['drugs:id,name', 
        'supplier:id,name', 
        'drug_category:id,name',
         'drugStocks' => function($query){
            $query->select('purchase_id', 'quantity')->groupBy('purchase_id', 'quantity');
         }])->findOrFail($id);
    }

    public function update(DrugPurchase $drugPurchase, array $data): bool
    {
        DB::beginTransaction();
    

        try {
        
            $drugPurchase->update([
                'drug_id' => $data['drug_id'],
                'supplier_id' => $data['supplier_id'],
                'drug_category_id' => $data['drug_category_id'],
                'category_id' => $data['category_id'],
                'purchase_price' => $data['purchase_price'],
                'purchase_date' => $data['purchase_date'],
            ]);
    
        
            $existingQuantity = $drugPurchase->drugStocks()->sum('quantity');
            $newQuantity = $data['quantity'];
    
            if ($newQuantity > $existingQuantity) {
                
                $quantityToAdd = $newQuantity - $existingQuantity;
                for ($i = 0; $i < $quantityToAdd; $i++) {
                    $drugPurchase->drugStocks()->create([
                        'purchase_id' => $drugPurchase->id,
                        'quantity' => $newQuantity,
                    ]);
                }
            } elseif ($newQuantity < $existingQuantity) {
              
                $quantityToReduce = $existingQuantity - $newQuantity;
    
                $drugStocksToDelete = $drugPurchase->drugStocks()
                    ->take($quantityToReduce)
                    ->get();
    
                foreach ($drugStocksToDelete as $drugStock) {
                    $drugStock->delete();
                }
            }
    
            DB::commit();
            return true;
    
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error('Error updating DrugPurchase: ' . $th->getMessage());
            return false;
        }
    }
    
}
