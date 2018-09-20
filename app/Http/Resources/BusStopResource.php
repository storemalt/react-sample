<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BusStopResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'type' => 'busStops',
            'id' => (string)$this->id,
            'attributes' => [
                'name' => $this->name,
                'address' => $this->address,
                'latitude' => $this->latitude,
                'longitude' => $this->longitude,
                'bus_schedule' => $this->bus_schedule,
                'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            ],
            'relationships' => '',
            'links'         => [
                'self' => route('bus-stops.show', ['bus-stop' => $this->id]),
            ],
        ];
    }
}
