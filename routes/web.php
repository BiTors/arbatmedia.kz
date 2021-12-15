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

Route::post('/bot', [TelegramBot::class, 'Bot']);
Route::post('/coll-me', [TelegramBot::class, 'botOne']);
Route::post('/rewrite', [Revrite::class, 'rewrite']);
Route::post('/rewrites', [Revrite::class, 'translate']);
Route::post('/payment', [Pay::class, 'payment']);

//Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
