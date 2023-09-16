<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vacancy extends Model
{
    use HasFactory;

    protected $table = 'vacancies';

    protected $fillable = [
        'title', // название
        'payment', // зарплата
        'employment', // тип работы (полный день...)
        'description', // описание
        'experience', // опыт
        'contacts', // контакты
        'requirements', // требования
        'responsibilities', // обязанности
        'conditions', // условия
        'skills', // навыки
        'reviews', // отзывы
        'company_id' // компания
    ];

    public function categories(): belongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_vacancy', 'vacancy_id', 'category_id');
    }

    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function filterBuildQuery(array $arr)
    {

        $vacancy = Vacancy::all();
        foreach ($arr as $key => $value) {
            if(is_array($value) && !empty($value)) {
                $vacancy = $vacancy->whereIn($key, $value);
                } elseif(!is_array($value) && !empty($value)) {
                $vacancy = $vacancy->where($key, $value);
            }
        }
        return $vacancy;
    }
}
