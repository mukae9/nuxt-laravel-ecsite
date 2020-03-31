<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/hello', function(){ return 'helloworld';});

Route::post('/register', 'RegistController@index');

Route::get('/product-all', 'ProductController@index');
Route::get('/product/{id}', 'ProductController@detail');
Route::get('/categories/{id}', 'ProductController@categories');
Route::post('/review', 'ProductController@review');
Route::get('/review/{id}', 'ProductController@reviewShow');
Route::get('/userss', function () { return 'ok';});


