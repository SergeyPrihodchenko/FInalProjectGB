<?php

use App\Enums\BuisnessTravelStatus;
use App\Enums\EmploymentType;
use App\Enums\RelocationStatus;
use App\Enums\ScheduleType;
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
        Schema::table('resumes', function (Blueprint $table) {
            $table->string('salary')->nullable();
            $table->enum('employment_type', EmploymentType::all());
            $table->enum('schedule_type', ScheduleType::all());
            $table->enum('relocation', RelocationStatus::getAll());
            $table->enum('buisness_travel', BuisnessTravelStatus::getAll());
            $table->string('about_me')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('resumes', function (Blueprint $table) {
            $table->dropColumn('salary');
            $table->dropColumn('employment_type');
            $table->dropColumn('schedule_type');
            $table->dropColumn('relocation');
            $table->dropColumn('buisness_travel');
            $table->dropColumn('about_me');
        });
    }
};
