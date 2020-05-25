<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Item; //追加

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::all();
        return $items;
    }
}
