var map2;
var map_center2 = new google.maps.LatLng(46.822112,-71.312559);

function initialize() {

	var mapOptions = {
    // center: new google.maps.LatLng(46.7985575,-71.2456323),
    center: map_center2,
    zoom: 14,
    scrollwheel: false,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

	map2 = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  map2.panBy(-60, -70);
	var delsanMapStyles = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#cacaca"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b0abb0"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#768fcc"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#d6d6d6"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#d9d9d9"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#d9d9d9"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]}];

	map2.setOptions({ styles: delsanMapStyles });

	var image = new google.maps.MarkerImage(
	    '/assets/mapmarker.png',
	    new google.maps.Size(33, 50)
	);

	var marker1 = new google.maps.Marker({
	    draggable: false,
	    raiseOnDrag: false,
	    map: map2,
	    icon: image,
	    position: map2.getCenter()
	});
}

if($('#map-canvas').length > 0){
    google.maps.event.addDomListener(window, 'load', initialize);

    google.maps.event.addDomListener(window, 'resize', function() {
        map2.setCenter(map_center2);
    });
}

$(function(){
  /*====================================
  =            map controls            =
  ====================================*/

  //var btn_center  = $('.mapContainer2').find('.btn_center'),
  //btn_zoomIn      = $('.mapContainer2').find('.btn_zoomIn'),
  //btn_zoomOut     = $('.mapContainer2').find('.btn_zoomOut');
  //
  //btn_center.click(function(){
  //  map2.panTo(map_center2);
  //});
  //
  //btn_zoomIn.click(function(){
  //    var zoom = map2.getZoom();
  //    zoom++;
  //    map2.setZoom(zoom);
  //});
  //
  //
  //btn_zoomOut.click(function(){
  //    var zoom = map2.getZoom();
  //    zoom--;
  //    map2.setZoom(zoom);
  //});

  /*-----  End of map controls  ------*/
});