<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Item; 
use App\Models\Review; 
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
            'item_id' => $request->item_id, 
            'name' => $request->name, 
            'star' => $request->star,
            'message' => $request->message
        ];
        Review::Create($data);
    }
}
