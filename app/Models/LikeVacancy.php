<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LikeVacancy extends Model
{
    use HasFactory;

    protected $table = 'user_like_vacancy';

    protected $fillable = [
        'user_id',
        'vacancy_id'
    ];
}
