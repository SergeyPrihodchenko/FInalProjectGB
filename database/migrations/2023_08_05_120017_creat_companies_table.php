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
        Schema::create('companies', static function (Blueprint $table):void  {
            $table->id();
            $table->string('email', 100)->nullable();
            $table->string('name', 250);
            $table->string('business_profile', 100)->nullable();
            $table->string('website', 100)->nullable();
            $table->string('region_of_location', 250)->nullable();
            $table->dateTime('date_create')->nullable();
            $table->string('phone_number', 100)->nullable();
            $table->text('description')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');

    }
};
