var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var Kaltura = require('./lib/KalturaClient.js');
var config = new Kaltura.KalturaConfiguration(1760921);
config.serviceUrl = "https://www.kaltura.com/";
var client = new Kaltura.KalturaClient(config);
client.session.start(function(ks) {
  if (ks.code && ks.message) {
    console.log('Error starting session', success, ks);
  } else {
    client.setKs(ks);
  }
}, "8d6cb692ab0f41bfa6bde373204c4b40",
"lucybot@example.com",
Kaltura.enums.KalturaSessionType.ADMIN,
1760921)

var app = express();
app.use('/', express.static(__dirname + '/www'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
})

app.post('/getMedia', function(req, res) {
  var entryId = "1_318vzqcr";
  var version = null;

  client.media.get(function(results) {
    if (results.code && results.message) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
  res.render('KalturaMediaEntry', {request: req.body, result: results})
    }
  },
  entryId,
  version);
});
app.post('/searchCaptionAssetItem', function(req, res) {
  entryFilter = new Kaltura.objects.KalturaBaseEntryFilter();

  captionAssetItemFilter = new Kaltura.objects.KalturaCaptionAssetItemFilter();
  captionAssetItemFilter.contentLike = "support";

  captionAssetItemPager = new Kaltura.objects.KalturaFilterPager();


  client.captionAssetItem.search(function(results) {
    if (results.code && results.message) {
      console.log('Kaltura Error', success, results);
    } else {
      console.log('Kaltura Result', results);
  res.render('CaptionSearch', {request: req.body, result: results.objects})
    }
  },
  entryFilter,
  captionAssetItemFilter,
  captionAssetItemPager);
});

app.listen(process.env.PORT || 3333);