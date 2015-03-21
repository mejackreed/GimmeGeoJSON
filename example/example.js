$(document).ready(function() {
  $('#wfsForm').parsley();
  $('#wfsForm').submit(function(e) {
    e.preventDefault();
    if ($(this).parsley().isValid()) {
      var url = gimmeGeojson.wfs({
        wfsUrl: $('#wfsUrl').val(),
        typeNames: $('#typeNames').val()
      });
      $('#wfsResultText').val(url);
      // $('#wfsGeojsonIo').attr('href', 'http://geojson.io/#data=data:text/x-url,' + encodeURIComponent(url));
      $('#wfsResult').show();
    }
  });
});
