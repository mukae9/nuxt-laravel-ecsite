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
Route::get('/items', 'Api\ItemController@index'); //追加
Route::get('/test', 'Api\MainController@test');
Route::get('/detail/{id}', 'Api\ItemController@detail'); //追加
Route::get('/secret', 'MainController@secret')->middleware('auth:api');
Route::get('/user', 'MainController@test');
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'Api\AuthController@login');
    Route::post('logout', 'Api\AuthController@logout');
    Route::post('register', 'Api\AuthController@register');
    Route::post('me', 'Api\AuthController@me');

});