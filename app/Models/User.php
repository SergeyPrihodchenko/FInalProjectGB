<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Concerns\HasRelationships;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'isRol',
        'address',
        'social_media'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


//    public function companies()
//    {
//        return $this->belongsToMany(Company::class);
//    }

    public function createdCompanies()
    {
        return $this->hasMany(Company::class, 'creator_id');
    }


    public function subscriptions(): BelongsToMany
    {
        return $this->belongsToMany(Company::class, 'company_user', 'user_id', 'company_id')
            ->using(CompanyUser::class);
    }


//    public function isSubscribedTo(Company $company)
//    {
//
//        return $this->subscriptions()->get()->contains($company);
//    }
//    public function isSubscribedTo(Company $company)
//    {
//        dd($company);
//        return $this->subscriptions()->where('company_id', $company->id)->exists();
//    }

    public function subscribeToCompany(Company $company)
    {
        $this->subscriptions()->attach($company->id);
    }

    public function unsubscribeFromCompany(Company $company)
    {
        $this->subscriptions()->detach($company->id);
    }


    public function resumes(): HasMany
    {
        return $this->hasMany(Resume::class);
    }

}
