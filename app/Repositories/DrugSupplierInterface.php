<?php 

namespace App\Repositories;

use App\Models\DrugSale;
use App\Models\DrugSupplier;

interface DrugSupplierInterface{

    public function index();

    public function store(array $data):DrugSupplier;

    public function edit(DrugSale $drugSale);

    public function update(DrugSale $drugSale, array $data):bool;
}