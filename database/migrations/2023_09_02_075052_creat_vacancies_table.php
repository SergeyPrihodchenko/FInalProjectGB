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
            $table->string('payment', 100);
            $table->string('experience', 250);
            $table->timestamps();
            $table->enum('employment', EmploymentType::all());
            $table->index('employment');
            $table->unsignedBigInteger('company_id');

            // Создание внешнего ключа
            $table->foreign('company_id')
                ->references('id')
                ->on('companies')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->index('company_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');

//        Schema::table('vacancies', function($table)
//        {
//            $table->dropForeign(['company_id']);
//            $table->dropColumn('company_id');
//        });
        Schema::dropIfExists('vacancies');
    }
};
