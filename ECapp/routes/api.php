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

Route::post('/review', 'Api\ItemController@reviewPost'); 
Route::get('/detail/{id}', 'Api\ItemController@detail');
Route::get('/items', 'Api\ItemController@index'); 
Route::get('/test', 'MainController@test');
Route::post('/register', 'Api\AuthController@register');
Route::post('/login', 'Api\AuthController@authenticate'); 

Route::middleware('auth:sanctum')->group(function(){

    Route::get('/user', function(Request $request){
        return $request->user();
    });

});