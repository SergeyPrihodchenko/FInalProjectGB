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
        Schema::create('user_response_vacancies', function (Blueprint $table) {
            $table->id();

            // Создание внешнего ключа юзера
            $table->unsignedBigInteger('resume_id');
            $table->foreign('resume_id')
                ->references('id')
                ->on('resumes')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->index('resume_id');    

            // Создание внешнего ключа вакансии
            $table->unsignedBigInteger('vacancy_id');
            $table->foreign('vacancy_id')
                ->references('id')
                ->on('vacancies')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->index('vacancy_id');
            $table->unique(['resume_id', 'vacancy_id']);
            $table->timestamps();

            $table->foreignId('status_id')->index()->constrained('statuses');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_click_vacancies');
    }
};
