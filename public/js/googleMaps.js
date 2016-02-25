function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {lat:32.880, lng:-117.236};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(32.885016, -117.241325),
    zoom: 15
  });

  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(32.885016, -117.241325),

      map: map,
      title: 'UCSD'
  });
}