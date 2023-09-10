<?php

use App\Enums\EmploymentType;
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
        Schema::create('vacancies', static function (Blueprint $table): void {
            $table->id();
            $table->string('title', 100);
            $table->integer('payment')->nullable();
            $table->enum('employment', EmploymentType::all());
            $table->index('employment');
            $table->text('description')->nullable();
            $table->integer('experience')->default(0);
            $table->string('contacts')->nullable();
            $table->text('requirements')->nullable();
            $table->text('responsibilities')->nullable();
            $table->string('conditions')->nullable();
            $table->text('skills')->nullable();
            $table->text('reviews')->nullable();
            $table->unsignedBigInteger('company_id');
            $table->foreign('company_id')->references('id')->on('companies')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
//        Schema::table('vacancies', function($table)
//        {
//            $table->dropForeign('company_id');
//        });
        Schema::dropIfExists('vacancies');
    }
};
