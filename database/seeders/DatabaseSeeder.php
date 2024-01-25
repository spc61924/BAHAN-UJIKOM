<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(5)->create();
        User::create([
            'name' => 'SANDY',
            'email' => 'sandy@gmail.com',
            'password' => bcrypt('password'),
            'namerole' => 'administrator',
            'isrole' => '1',
            // 'remember_token' => Str::random(60),
        ]);
    }
}
