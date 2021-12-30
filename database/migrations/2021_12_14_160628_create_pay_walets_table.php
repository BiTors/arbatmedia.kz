<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePayWaletsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pay_walets', function (Blueprint $table) {
            $table->id();
            $table->string('order');
            $table->string('name');
            $table->string('delivery');
            $table->string('address')->nullable();
            $table->string('phone');
            $table->string('status')->nullable();;
            $table->string('z')->nullable();;
            $table->string('status_pay')->nullable();;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pay_walets');
    }
}
