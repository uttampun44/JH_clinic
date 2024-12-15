<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\MedicineInventory\DrugCategoriesController;
use App\Http\Controllers\MedicineInventory\DrugController;
use App\Http\Controllers\MedicineInventory\DrugSupplierController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render("Auth/Login");
});


Route::middleware(['auth', 'verified'])->group(function(){
        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');
        Route::resource('patients', PatientController::class);
        Route::resource('doctors', DoctorController::class);
        Route::resource('appointments', AppointmentController::class);
        Route::resource('drug-categories', DrugCategoriesController::class);
        Route::resource('drugs', DrugController::class)->only(['index', 'create', 'store', 'edit', 'update']);
        Route::resource('drug-suppliers', DrugSupplierController::class)->only(['index']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
