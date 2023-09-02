<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategorHasVacancy extends Model
{
    use HasFactory;

    protected $table = 'category_has_vacancy';

    protected $fillable = [
        'category_id',
        'vacancy_id'
    ];
}
