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
        Schema::create('reviews_of_companies',  static function (Blueprint $table): void {
            $table->id();

            // Создание внешнего ключа компании
            $table->unsignedBigInteger('company_id');
            $table->foreign('company_id')
                ->references('id')
                ->on('companies')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->index('company_id');

            // Создание внешнего ключа юзера
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->index('user_id');

            $table->text('content')->nullable();//Содержание отзыва
            $table->integer('rating')->nullable();
           //$table->enum('rating', ['1', '2' ,'3' ,'4' ,'5',])->nullable(); //Рейтинг отзыва (1-5)
            //$table->enum('rating', \App\Enums\CompanyRating::getAll())->nullable(); //Рейтинг отзыва (1-5)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews_of_companies');
    }
};
