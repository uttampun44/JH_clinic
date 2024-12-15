<?php 

namespace App\Repositories;

use App\Models\DrugSale;
use App\Models\DrugSupplier;

interface DrugSupplierInterface{

    public function index();

    public function store(array $data):DrugSupplier;

    public function edit(DrugSupplier $drugSale);

    public function update(DrugSupplier $drugSale, array $data):bool;
}