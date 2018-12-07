function initMap(pos) {
    //Create the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.7490, lng: -84.3880 },
        zoom: 12,
        mapTypeId: "satellite"
    });

}
// // Create a marker and set its position.
// marker = new google.maps.Marker({
//     map: map,
//     position: pos,
//     title: 'Hello World!'
// });
infoWindow = new google.maps.infoWindow;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
    },
        function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
}



else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}









// $(document).ready(function(){
//     $.ajax({url: "https://www.google.com/maps/search/?AIzaSyCkAHjG4_KBcjnExF0IO01APrraNTvYY9E   "
// success: function(result){
//     $("#div1").html(result);
//     }});
    // });