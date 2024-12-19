<?php

namespace App\Repositories;

use App\Models\DrugSale;

interface DrugSaleRepositoryInterface{
    public function index();

    public function store(array $data):DrugSale;

   public function edit(DrugSale $drugSale):DrugSale;

   public function update(DrugSale $drugSale, array $data):bool;
}