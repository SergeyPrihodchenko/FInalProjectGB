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

        Schema::create('user_like_vacancy',  static function (Blueprint $table): void {
            
        $table->id();

        // Создание внешнего ключа юзера
        $table->unsignedBigInteger('user_id');
        $table->foreign('user_id')
            ->references('id')
            ->on('users')
            ->onDelete('cascade')
            ->onUpdate('cascade');
        $table->index('user_id');    

        // Создание внешнего ключа компании
        $table->unsignedBigInteger('vacancy_id');
        $table->foreign('vacancy_id')
            ->references('id')
            ->on('vacancies')
            ->onDelete('cascade')
            ->onUpdate('cascade');
        $table->index('vacancy_id');

        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_like_vacancy');
    }
};
