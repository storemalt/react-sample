@extends('layouts.app')

@section('content')
    <div class="row">
        <div class="col-12">
            <div id="content"></div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="{{asset('js/app.js')}}" ></script>
@endsection
