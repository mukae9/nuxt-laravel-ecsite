<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->truncate(); //2回目実行の際にシーダー情報をクリア
        DB::table('items')->insert([
            [
                'name' => '花瓶',
                'category' => '日用品',
                'detail' => '適度なサイズの花瓶です。',
                'fee' => 1000,
                'express' => true,
                'release' =>  date('Y/m/d',strtotime('-1 day')),
                'imgpath' => '/images/kabin.jpg',
            ],
            [
                'name' => 'スマートフォン',
                'categories' => '日用品',
                'detail' => 'どこかのメーカーのスマホです。',
                'fee' => 69800,
                'express' => true,
                'release' =>  date('Y/m/d',strtotime('-5 day')),
                'imgpath' => '/images/mobile.jpg',
            ],
            [
                'name' => '人参２本セット',
                'categories' => '食料品',
                'detail' => '鹿児島産の人参です。',
                'fee' => 150,
                'express' => false,
                'release' =>  date('Y/m/d',strtotime('-10 day')),
                'imgpath' => '/images/ninzin.jpg',
            ],
            [
                'name' => 'ピーマンの輪切り',
                'categories' => '食料品',
                'detail' => '鹿児島県産のピーマンを輪切りにしました。',
                'fee' => 200,
                'express' => true,
                'release' =>  date('Y/m/d',strtotime('-15 day')),
                'imgpath' => '/images/peaman.jpg',
            ],
            [
                'name' => 'バッグ',
                'categories' => 'アウトドア',
                'detail' => 'ピクニックに行きたくなるバックです。',
                'fee' => 2980,
                'express' => true,
                'release' =>  date('Y/m/d',strtotime('-20 day')),
                'imgpath' => '/images/bag.jpg',
            ],
            [
                'name' => '懐かしい駒',
                'categories' => 'ホビー',
                'detail' => 'あの日の思い出が蘇る駒です。',
                'fee' => 500,
                'express' => true,
                'release' =>  date('Y/m/d',strtotime('-25 day')),
                'imgpath' => '/images/koma.jpg',
            ],
            [
                'name' => '南京錠',
                'categories' => '日用品',
                'detail' => '無駄に美しい南京錠です。',
                'fee' => 2000,
                'express' => true,
                'release' =>  date('Y/m/d',strtotime('-30 day')),
                'imgpath' => '/images/lock.jpg',
            ],
            [
                'name' => 'ドライフラワー',
                'categories' => 'ホビー',
                'detail' => 'うまくできました。',
                'fee' => 980,
                'express' => false,
                'release' =>  date('Y/m/d',strtotime('-35 day')),
                'imgpath' => '/images/dryflower.jpg',
            ]
        ]);
    }
}
