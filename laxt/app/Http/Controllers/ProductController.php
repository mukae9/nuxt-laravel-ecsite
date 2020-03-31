<?php

namespace App\Http\Controllers;
use App\Models\Product;
use App\Models\Review;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('reviews')->get();
        return $products;
    }

    public function detail($id)
    {
        $product_id = $id;
        $product = Product::with('reviews')->find($product_id);
        return $product;
    }

    public function categories($id)
    {
        $categories = $id;
        $categorise_products = Product::Where('categories',$categories)->with('reviews')->get();
        return $categorise_products;
    }

    public function review(Request $request)
    {
        $data = [
            'product_id' => $request->product_id, 
            'name' => $request->name, 
            'star' => $request->star,
            'message' => $request->message
        ];
        $categorise_products = Review::Create($data);
    }

    public function reviewShow($id)
    {
        $reviews = Review::Where('product_id',$id)->get();
        return $reviews;
    }
}
