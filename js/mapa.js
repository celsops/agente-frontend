
$.ui.autoLaunch = false;
$.ui.animateHeaders = false;

/* Required if building app using Intel XDK */        
function onDeviceReady(){ 
    $.ui.launch();
    intel.xdk.device.hideSplashScreen();
}

$(document).ready(function(){
    document.addEventListener("intel.xdk.device.ready", onDeviceReady, false);
    $.ui.launch();
    setupMap();
});
        
/* Google Maps API code to show map and layers */        
        
var map;
function setupMap(){
    var mapOptions = {
        center: new google.maps.LatLng(45.53, -122.67),
        zoom: 10,
        mapTypeControl: false,
        streetViewControl: false,
        navigationControl: true,
        scrollwheel: false,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
} 
        
function getGeoLocation(){
    var success = function(position){
        map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    }
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, null);
    }   
}       

var trafficLayer = new google.maps.TrafficLayer();
var transitLayer = new google.maps.TransitLayer();        
var bicyclingLayer = new google.maps.BicyclingLayer();

function toggleTrafficLayer(){
    document.getElementById('toggle1').checked ? trafficLayer.setMap(map) : trafficLayer.setMap(null);
} 
        
function toggleTransitLayer(){
    document.getElementById('toggle2').checked ? transitLayer.setMap(map) : transitLayer.setMap(null);
} 
        
function toggleBicyclingLayer(){
    document.getElementById('toggle3').checked ? bicyclingLayer.setMap(map) : bicyclingLayer.setMap(null);
}         
    