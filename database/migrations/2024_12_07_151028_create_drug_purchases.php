<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('drug_purchases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('drug_id')->constrained('drugs')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('supplier_id')->constrained('drug_suppliers')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('drug_category_id')->constrained('drug_categories')->onUpdate('cascade')->onDelete('cascade');
            $table->decimal('purchase_price', 10, 2);
            $table->date('purchase_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drug_purchases');
    }
};
