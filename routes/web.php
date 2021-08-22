<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TelegramBot;
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
Route::get('/', function () {
    return view('index');
});

Route::post('/bot', [TelegramBot::class, 'Bot']);
Route::post('/coll-me', [TelegramBot::class, 'botOne']);

//Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
