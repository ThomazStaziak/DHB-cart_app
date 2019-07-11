<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Produto;

class ProdutoController extends Controller
{
    public function index()
    {
        $products = Produto::orderBy('created_at', 'DESC')->get();

        return $products;
    }

    public function store(Request $resquest)
    {
        $saved = Produto::create([
            'nome' => $resquest->input('nome'),
            'valor' => $resquest->input('valor'),
            'quantidade' => 1
        ]);

        if (!$saved) return response()->json(['adicionado' => false], 500);

        return response()->json(['adcionado' => true], 201);
    }

    public function increaseQuantity($id)
    {
        $product = Produto::find($id);
        
        if ($product->quantidade > 9) return response()->json(['mensagem' => 'não é possível adicionar mais produtos'], 500);
        
        $product->quantidade++;
        $product->save();
        
        return $product;
    }

    public function decreaseQuantity($id)
    {
        $product = Produto::find($id);
        
        if ($product->quantidade < 2) return response()->json(['mensagem' => 'não é possível retirar mais produtos'], 500);
        
        $product->quantidade--;
        $product->save();
        
        return $product;
    }

    public function truncate()
    {   
        $deleted = $products = Produto::truncate();

        if (!$deleted) return response()->json(['esvaziado' => false], 500);

        return response()->json(['esvaziado' => true], 200);
    }
}
