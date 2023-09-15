<?php

use App\Enums\EducationLevel;
use App\Enums\GenderType;
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
        Schema::create('resumes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');
            $table->string('profession');
            $table->string('first_name');
            $table->string('last_name');
            $table->enum('gender', GenderType::getAll());
            $table->string('region');
            $table->dateTime('date_of_birth');
            $table->string('phone');
            $table->string('citizenship');
            $table->string('work_permit');
            $table->enum('education', EducationLevel::getAll());
            $table->json('skills');
            $table->string('experience');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resumes');
    }
};
