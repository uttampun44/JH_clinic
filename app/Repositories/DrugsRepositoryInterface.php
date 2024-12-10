<?php 
namespace App\Repositories;

use App\Models\Drug;

interface DrugsRepositoryInterface{
    public function index();

    public function create();

    public function store(array $data): Drug;

    public function edit(Drug $drug): Drug;

    public function update(Drug $drug, array $data): bool;
    
    public function delete(Drug $drug);
}
