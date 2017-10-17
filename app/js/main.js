
(function() {
    'use strict';

    angular
        .module('books-brews', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider){
        
            $locationProvider.html5Mode(true);
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '../partials/home.html',
                    controller: 'mainController',
                    controllerAs: 'vm'    
                })
                .state('calender', {
                    url: '/calender',
                    templateUrl: '../partials/calender.html',
                    controller: 'mainController',
                    controllerAs: 'vm'
                })
                .state('menu', {
                    url: '/menu',
                    templateUrl: '../partials/menu.html',
                    controller: 'mainController',
                    controllerAs: 'vm'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: '../partials/about.html',
                    controller: 'mainController',
                    controllerAs: 'vm'
                })
        });
        
})();