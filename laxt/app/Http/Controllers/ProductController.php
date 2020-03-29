<?php

namespace App\Http\Controllers;
use App\Models\Product;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return $products;
    }

    public function detail($id)
    {
        $product_id = $id;
        $product = Product::find($product_id);
        return $product;
    }
}
