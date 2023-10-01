<?php

namespace App\Http\Controllers\Subscription;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Http\Request;
use App\Models\User;

class SubscriptionController extends Controller
{
//    public function subscribeToCompany(Request $request, $companyId)
//    {
//        $user = auth()->user();
//        $company = Company::findOrFail($companyId);
////dd($company);
//        if (!$user->isSubscribedTo($company)) {
//            $user->subscribeToCompany($company);
//            return redirect()->back()->with('success', 'Вы подписались на компанию.');
//        }
//
//        return redirect()->back()->with('error', 'Вы уже подписаны на эту компанию.');
//    }
//
//    public function unsubscribeFromCompany(Request $request, $companyId)
//    {
//        $user = auth()->user();
//        $company = Company::findOrFail($companyId);
//
//        if ($user->isSubscribedTo($company)) {
//            $user->unsubscribeFromCompany($company);
//            return redirect()->back()->with('success', 'Вы отписались от компании.');
//        }
//
//        return redirect()->back()->with('error', 'Вы не были подписаны на эту компанию.');
//    }


    public function subscribe(Request $request, $userId, $companyId)
    {
        $user = User::findOrFail($userId);
        $company = Company::findOrFail($companyId);

        // Подписка пользователя на компанию
        $user->subscribeToCompany($company);

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

    public function checkSubscription($userId, $companyId)
    {
        $user = User::findOrFail($userId);
        $company = Company::findOrFail($companyId);

        // Проверка, подписан ли пользователь на компанию
        $isSubscribed = $user->isSubscribedTo($company);

        if ($isSubscribed) {
            return "Пользователь подписан на компанию.";
        } else {
            return "Пользователь не подписан на компанию.";
        }
    }

}
