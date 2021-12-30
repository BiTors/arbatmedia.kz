<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ems', function (Blueprint $table) {
            $table->id();
            $table->string('order');
            $table->string('name');
            $table->string('delivery');
            $table->string('phone');
            $table->string('status')->nullable();
            $table->string('z')->nullable();
            $table->string('status_pay')->nullable();
            $table->string('obl')->nullable();
            $table->string('strit')->nullable();
            $table->string('home')->nullable();
            $table->string('zip')->nullable();
            $table->string('city')->nullable();
            $table->string('aps')->nullable();
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
        Schema::dropIfExists('ems');
    }
}
