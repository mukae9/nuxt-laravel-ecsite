<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->truncate(); //2回目実行の際にシーダー情報をクリア
        DB::table('products')->insert([
            'name' => 'フィルムカメラ',
            'categories' => '日用品',
            'detail' => '1960年式のカメラです',
            'fee' => 200000,
            'imgpath' => 'filmcamera.jpg',
        ]);
        DB::table('products')->insert([
            'name' => 'カメラ',
            'categories' => '日用品',
            'detail' => '1960年式のカメラです',
            'fee' => 200000,
            'imgpath' => 'filmcamera.jpg',
        ]);
        DB::table('products')->insert([
            'name' => 'またカメラ',
            'categories' => '日用品',
            'detail' => '1960年式のカメラです',
            'fee' => 200000,
            'imgpath' => 'filmcamera.jpg',
        ]);
        DB::table('products')->insert([
            'name' => '次のカメラ',
            'categories' => '日用品',
            'detail' => '1960年式のカメラです',
            'fee' => 200000,
            'imgpath' => 'filmcamera.jpg',
        ]);
    }
}
