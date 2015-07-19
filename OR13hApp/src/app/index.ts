/// <reference path="reference.ts" />

module OR13hApp {
    'use strict';

    angular.module('OR13hApp', [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'ui.sortable',
        'firebase'

    ])
        .controller(OR13hApp.Controllers)
        .directive(OR13hApp.Directives)
        .controller('NavbarCtrl', NavbarCtrl)
        .controller('DeveloperFeaturesController', DeveloperFeaturesController)
        .controller('DemoController', DemoController)
        .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider: ng.ILocationProvider, $stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {

            $locationProvider.html5Mode(true);

            $stateProvider
                .state('typescript', {
                    url: '/typescript',
                    templateUrl: 'app/demo/demo.html',
                    controller: 'DemoController'
                });


            $stateProvider
                .state('developer-features', {
                    url: '/developer-features',
                    templateUrl: 'app/developer-features/developer-features.html',
                    controller: 'DeveloperFeaturesController'
                });

            $urlRouterProvider.otherwise('/typescript');

        }]);
}
