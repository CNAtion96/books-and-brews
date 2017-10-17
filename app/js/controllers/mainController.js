(function() {
    'use strict';

    angular
        .module('books-brews')
        .controller('mainController', function(data) {
            const vm = this;

            function initMap() {
                var location = {lat: -25.363, lng: 131.044};
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    center: location
                });
                var marker = new google.maps.Marker({
                position: location,
                map: map
                });
            }
            
        })
})();