<?php 

namespace App\Repositories;

use App\Models\DrugPurchase;

interface DrugPurchaseRepositoryInterface{
    public function index();

    public function create();

    public function store(array $data):DrugPurchase;

    public function edit(DrugPurchase $drugPurchase, $id):DrugPurchase;

    public function update(DrugPurchase $drugPurchase, array $data):bool;
}