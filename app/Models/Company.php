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

    protected $casts = [
//        'created_at' => 'datetime:Y-m-d',
//        'updated_at' => 'datetime:d/m/Y',
        'date_create' => 'datetime:d/m/Y',
    ];

//protected $dates = ['date_create'];
//    public function setYourDateFieldAttribut($value) {
//        $this->attribut['date_create'] = Carbon\Carbon::createFromFormat('Y-m-d', $value)->format('d/m/Y);
//    }


}
