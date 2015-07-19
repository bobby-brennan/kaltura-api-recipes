<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
    </script>
    <link rel="stylesheet"
          href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet"
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js">
    </script>
    <script src="http://player.kaltura.com/mwEmbedLoader.php"></script>
    <script src="http://player.kaltura.com/kWidget/kWidget.auth.js"></script>
  </head>
  <body>
    <div class="container" style="margin-top:40px">
      <div class="KalturaCuePointListResponse"></div>
      <script>
        var element = $('.KalturaCuePointListResponse').last();
        element[0].loadData = function() {
          $('.KalturaCuePointListResponse').last().load('listCuePoint.php');
        }
        element[0].loadData();
      </script>
    </div>
  </body>
</html>