<?php
//
//use Illuminate\Database\Migrations\Migration;
//use Illuminate\Database\Schema\Blueprint;
//use Illuminate\Support\Facades\Schema;
//
//return new class extends Migration
//{
//    /**
//     * Run the migrations.
//     */
//    public function up(): void
//    {
//        Schema::table('vacancies', static function (Blueprint $table): void {
//            $table->unsignedBigInteger('company_id');
//            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
//            $table->index('company_id');
//        });
//    }
//
//    /**
//     * Reverse the migrations.
//     */
//    public function down(): void
//    {
//        Schema::table('vacancies', static function (Blueprint $table): void {
//            $table->dropForeign(['company_id']);
//        //});
//        //Schema::table('vacancies', static function (Blueprint $table): void {
//            $table->dropColumn(['company_id']);
//            $table->dropIndex('company_id');
//        });
//    }
//};
