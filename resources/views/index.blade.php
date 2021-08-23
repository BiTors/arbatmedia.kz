<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>DAGNA.KZ</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">

</head>
<body>
    <div class="wrapper">
        <div id="app">
            <v-app class="cast-fonts">
                    <v-header></v-header>
                  <a-section></a-section>
                <f-section></f-section>
                <portfolio></portfolio>
                <contacts></contacts>
                <footer-c></footer-c>
                {{--   <b-section></b-section>
                 <c-section></c-section>
                 <d-section></d-section>
                 <e-section></e-section>--}}
                <b-section></b-section>
                    <steps></steps>
                <e-section></e-section>

            </v-app>
        </div>
    </div>
</body>
<link href="{{mix('/css/app.css')}}" rel="stylesheet">
<script src="{{ mix('js/app.js') }}"></script>
</html>

