<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $table = 'companies';

    protected $fillable = [
        'email' ,
        'name',
        'business_profile',
        'website',
        'region_of_location',
        'date_create',
        'phone_number',
        'description',
    ];

    public function vacancies()
    {
        return $this->hasMany(Vacancy::class);
    }
}
