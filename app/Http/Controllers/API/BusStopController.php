<?php

namespace App\Http\Controllers\API;

use App\BusStop;
use App\Http\Resources\BusStopResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class BusStopController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api')->except(['store','index']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $busStops = BusStop::paginate(15);
        return BusStopResource::collection($busStops);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * @return \App\Http\Resources\BusStopResource
     */
    public function store(Request $request)
    {
        $busStop = $request->isMethod('put') ? BusStop::findOrFail($request->id) : new BusStop();

        $busStop->name = $request->input('name');
        $busStop->address = $request->input('address');
        $busStop->latitude = $request->input('latitude');
        $busStop->longitude = $request->input('longitude');
        $busStop->bus_schedule = $request->input('bus_schedule');

        if($busStop->save()) {
            return new BusStopResource($busStop);
        }

        return response()->json(null, 404 );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\BusStop  $busStop
     * @return \App\Http\Resources\BusStopResource
     */
    public function show(BusStop $busStop)
    {
        return new BusStopResource($busStop);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\BusStop $busStop
     * @throws
     * @return \Illuminate\Http\Response
     */
    public function destroy(BusStop $busStop)
    {
        // @ADRIAN: test update and delete
        if ($busStop->delete()) {
            return new BusStopResource($busStop);
        }

        return response()->json(null, 404 );
    }
}
