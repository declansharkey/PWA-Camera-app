function geoFindMe() {
    var output = document.getElementById("gps-details");

    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    //Build the map and coordinates
    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        //Use Google's API to pull in the map'
        var img = new Image();
        img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x100&sensor=false";

        output.appendChild(img);
    }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }

    //output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(success, error);
}