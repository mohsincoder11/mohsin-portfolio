<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>LoansCashBox</title>
  <meta name="keywords" content="LoansCashBox">
  <meta name="description" content="LoansCashBox">
  <meta name="apple-mobile-web-app-title" content="LoansCashbox" />
  @vite('resources/css/app.scss')
</head>

<body>
  <div id="app"></div>
  @vite('resources/js/app.js')
</body>


</html>