<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
class Pay extends Controller
{
    public function payment(Request $request){

        $key="6f64754761386650325f4d4870546d724a74335c6478636a774643";
        $URI = 'https://wl.walletone.com/checkout/checkout/Index';
        /*$params['headers'] = ['Content-Type' => 'application/json', 'Authorization' => 'Zoho-authtoken ' . $AuthCode];*/
        $params = [
            'WMI_MERCHANT_ID' => "172357951243",
            'WMI_PAYMENT_NO' => time(),
            'WMI_CURRENCY_ID' => "643",
            'WMI_PAYMENT_AMOUNT' => "5000",
            'WMI_DESCRIPTION' => "BASE64:".base64_encode('Покупка книги "ТОК"'),
            'SUCCESS_URL' => "https://arbatbooks.kz/success",
            'WMI_FAIL_URL' => "https://arbatbooks.kz/fail",
            'WMI_SIGNATURE' =>$key,
            'WMI_AUTO_ADJUST_AMOUNT'=>1
        ];
        echo $response = Http::get($URI, $params);

    }
}
