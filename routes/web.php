<?php

use App\Http\Controllers\PatientController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
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
    
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
