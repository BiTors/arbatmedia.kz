<?php

namespace App\Http\Controllers;

use App\Models\PayWalet;
use Illuminate\Http\Request;
use App\order\order;
use Illuminate\Support\Facades\Http;
class Pay extends Controller
{
    public function resultPay(Request $request): string
    {
        $ordera = PayWalet::where('order', $request['WMI_PAYMENT_NO'])->first();
        $bot = new order();

        if(isset($ordera)){
            $ordera->status_pay = '3123123123';
            $ordera->save();
            $bot->Status($request);
            return 'WMI_RESULT=OK';
        }
        return 'WMI_RESULT=RETRY';
    }

    public function payment(Request $request){
        $order = new order();
        $order =  $order->ChekOrder($request);
        return response($order);
    }
    public function paymentCash(Request $request){
        $order = new order();
        $order =  $order->paymentCash($request);
        return response($order);
    }
    public function paymentOnline(Request $request){
        $order = new order();
        $order =  $order->paymentOnline($request);
        return response($order);
    }
    public function paymentOnlineEms(Request $request){
        $order = new order();
        $order =  $order->paymentOnlineEms($request);
        return response($order);
    }
}
