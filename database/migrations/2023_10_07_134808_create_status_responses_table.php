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
        Schema::create('status_responses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('resume_id')->index()
            ->constrained('resumes');
            $table->foreignId('vacancy_id')->index()
            ->constrained('vacancies');
            $table->foreignId('status_id')->index()
            ->constrained('status_types');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('status_responses');
    }
};
