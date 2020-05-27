<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Item; //追加
use App\Models\Review; //追加
use App\Http\Requests\ReviewPost; 

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::With('reviews')->get();
        return $items;
    }
    public function detail($id)
    {
        $item = Item::With('reviews')->find($id);
        return $item;
    }
    
    public function reviewPost(ReviewPost $request)
    {
        $data = [
            'item_id' => $request->input('item_id'), 
            'name' => $request->input('name'), 
            'star' => $request->input('star'),
            'message' => $request->input('message')
        ];
        Review::Create($data);
    }
}
