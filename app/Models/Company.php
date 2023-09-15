<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $table = 'companies';

    protected $fillable = [
        'name',
        'email' ,
        'website',
        'phone_number' ,
        'address'
    ];

    public function vacancies()
    {
        return $this->hasMany(Vacancy::class);
    }
}
