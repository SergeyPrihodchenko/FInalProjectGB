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
        'creator_id',
        'logo',
        'city'

    ];

    protected $casts = [
    'date_create' => 'datetime:d/m/Y',
    ];


    public function vacancies()
    {
        return $this->hasMany(Vacancy::class);
    }


    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }
    public function getLogoUrl()
    {
        return asset('storage/' . $this->logo);
    }


}
