<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TelegramBot;
use App\Http\Controllers\Pay;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/{any}', function () {
    return view('index');
})->where('any','.*');

Route::post('/payment', [Pay::class, 'payment']);
Route::post('/payment-cash', [Pay::class, 'paymentCash']);
Route::post('/payment-online', [Pay::class, 'paymentOnline']);
Route::post('/payment-online-ems', [Pay::class, 'paymentOnlineEms']);
Route::post('/pay/result', [Pay::class, 'resultPay']);
Route::post('/pay/stay', [Pay::class, 'resultPayStay']);

//Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
