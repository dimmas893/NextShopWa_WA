<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConfigsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('configs', function (Blueprint $table) {
            $table->id();
            $table->string('theme')->nullable()->default('default');
            $table->string('theme_color')->nullable()->default('#057f97');
            $table->string('home_view_mode')->nullable()->default('grid');
            $table->string('product_view_mode')->nullable()->default('grid');
            $table->text('shipping_costs')->nullable();
            $table->string('warehouse_coordinate')->nullable();
            $table->string('mapbox_access_token')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('configs');
    }
}
