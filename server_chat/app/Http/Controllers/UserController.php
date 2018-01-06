<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function getUserList() {
        $users = User::orderBy('name', 'asc')->get();
        return response(['data' => $users], 200);
    }
}
