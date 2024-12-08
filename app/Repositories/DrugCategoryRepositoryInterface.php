<?php

namespace App\Repositories;

use App\Models\DrugCategory;

interface DrugCategoryRepositoryInterface{
    public function index();

    public function store(array $data):DrugCategory;

    public function edit(DrugCategory $drugCategory);

    public function update(DrugCategory $drugCategory, array $data):bool;
}