<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Roleaccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if(in_array($request->user()->namerole, $roles)){
            return $next($request);
        }

        return redirect('/');

    }
}
