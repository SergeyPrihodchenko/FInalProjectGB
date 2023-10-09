<?php

//namespace App\Models;
//
//use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Model;
//
//class CompanyUser extends Model
//{
//    use HasFactory;
//
//    protected $table = 'company_user';
//
//    protected $fillable = [
//        'company_id',
//        'user_id'
//    ];
//
//    public $timestamps = false;
//}


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CompanyUser extends Pivot
{
    use HasFactory;

    protected $table = 'company_user';

    protected $fillable = [
        'company_id',
        'user_id'
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
