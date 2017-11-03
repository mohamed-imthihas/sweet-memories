function init_map() {
    var myOptions = {
        zoom: 12,
        center: new google.maps.LatLng(11.1271225, 78.65689420000001),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('googleMap'), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(11.1271225, 78.65689420000001)
    });
    infowindow = new google.maps.InfoWindow({
        content: '<strong>map</strong><br>tamilnadu,india<br>'
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
$(document).ready(function() {
    init_map();
});