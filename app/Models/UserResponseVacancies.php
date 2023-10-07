<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserResponseVacancies extends Model
{
    use HasFactory;

    protected $table = 'user_response_vacancies';
    protected $guarded = false;
}
