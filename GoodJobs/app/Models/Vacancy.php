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
        'title',
        'description',
        'payment',
        'experience',
        'contacts'
    ];

    public function categories(): belongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_vacancy', 'vacancy_id', 'category_id');
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
