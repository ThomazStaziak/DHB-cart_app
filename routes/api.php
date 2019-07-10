<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/listar-produtos', array('middleware' => 'cors', 'uses' => 'Api\ProdutoController@index'));
Route::post('/adicionar-produtos', array('middleware' => 'cors', 'uses' => 'Api\ProdutoController@store'));
Route::get('/aumentar-quantidade/:id', array('middleware' => 'cors', 'uses' => 'Api\ProdutoController@increaseQuantity'));
Route::get('/diminuir-quantidade/:id', array('middleware' => 'cors', 'uses' => 'Api\ProdutoController@decreaseQuantity'));
Route::get('/deletar-produtos', array('middleware' => 'cors', 'uses' =>'Api\ProdutoController@truncate'));