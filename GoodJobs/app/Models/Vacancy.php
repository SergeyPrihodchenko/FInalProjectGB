<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vacancy extends Model
{
    use HasFactory;

    protected $table = 'vacancies';

    protected $fillable = [
        'title' => 'required',
        'payment' => '',
        'experience' => '',
    ];

    public function categories(): belongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_vacancy', 'vacancy_id', 'category_id');
    }
}
