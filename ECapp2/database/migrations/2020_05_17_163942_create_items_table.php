<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name','100')->comment('商品名');
            $table->string('category','50')->comment('カテゴリー');
            $table->string('detail','200')->comment('商品詳細');
            $table->integer('fee')->comment('値段');
            $table->boolean('express')->comment('お急ぎ便対応');
            $table->date('release')->comment('発売日');
            $table->string('imgpath','200')->comment('画像path');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}
