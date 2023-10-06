<?php

namespace App\Http\Controllers\Subscription;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\CompanyUser;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class SubscriptionController extends Controller
{
    public function subscribe(Request $request, $userId, $companyId)
    {
        $user = User::findOrFail($userId);
        $company = Company::findOrFail($companyId);

        // Подписка пользователя на компанию
        $user->subscribeToCompany($company);
//dd( $user);
        return redirect()->back()->with('success', 'Вы успешно подписались на компанию.');

    }

    public function unsubscribe(Request $request, $userId, $companyId)
    {
        $user = User::findOrFail($userId);
        $company = Company::findOrFail($companyId);

        // Отписка пользователя от компании
        $user->unsubscribeFromCompany($company);

        return redirect()->back()->with('success', 'Вы успешно отписались от компании.');
    }

//    public function checkSubscription($userId, $companyId)
//    {
//
//        $user = User::findOrFail($userId);
//        $company = Company::findOrFail($companyId);
//
//        $isSubscribed = CompanyUser::where('company_id', $companyId)->where('user_id', $userId)->get();
//        // Проверка, подписан ли пользователь на компанию
//        // $isSubscribed = $user->isSubscribedTo($company);
//        dd($isSubscribed);
//        if ($isSubscribed) {
//            return "Пользователь подписан на компанию.";
//        } else {
//            return "Пользователь не подписан на компанию.";
//        }
//    }

}
