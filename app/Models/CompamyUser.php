<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompamyUser extends Model
{
    use HasFactory;

    protected $table = 'company_user';

    protected $fillable = [
        'company_id',
        'user_id'
    ];

    public $timestamps = false;
}
