<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {

        return [
            'type' => 'users',
            'id' => (string)$this->id,
            'attributes' => [
                'username' => $this->username,
                'name' => $this->name,
                'email' => $this->email,
            ],
            'relationships' => '',
            'links'         => [
                'self' => route('users.show', ['user' => $this->id]),
            ],
        ];
    }
}
