<?php

namespace App\Models;

use App\Enums\CompanyRating;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ReviewsOfCompanies extends Pivot
{
    use HasFactory;

    protected $table = 'reviews_of_companies';

    protected $fillable = [
        'company_id',
        'user_id',
        'content',
        'rating'
    ];

    protected $casts = [
     'rating' => 'int',
        //'rating' => CompanyRating::class,
    ];

    public $timestamps = false;

    public function company()
    {
        return $this->belongTo(Company::class);
    }

    public function user()
    {
        return $this->belongTo(User::class);
    }


}
