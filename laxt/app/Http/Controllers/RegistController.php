<?php

namespace App\Http\Controllers;
use App\User;

use Illuminate\Http\Request;

class RegistController extends Controller
{
    public function index(Request $request)
    {
        $data = [
            'name' => $request->name, 
            'email' => $request->email,
            'password' => $request->password
        ];
        $userinfo = User::firstOrCreate($data);
        return $userinfo;
    }

}
