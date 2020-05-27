<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function test()
    {
        return 'こんにちは';
    }

    public function secret()
    {
        return '秘密の言葉';
    }

}
