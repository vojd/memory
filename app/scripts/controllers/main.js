'use strict';

/**
 * @ngdoc function
 * @name klasskrigApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the klasskrigApp
 */
angular.module('klasskrigApp')
    .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
        $scope.neolib = {
            expanded : false,
            tag : "neolib"
        };

        $scope.extremism = {
            expanded : false,
            tag : "extremism"
        };

        $scope.intro = {
            expanded : false,
            tag : "intro"
        };

        $scope.aaa = {
            expanded : false,
            tag : "aaa"
        };

        $scope.dict = {
            expanded : false,
            tag : "dict"
        };

        $scope.scrollTo = function(dest) {
            dest.expanded = true;
            $location.hash(dest.tag);
            $anchorScroll();
        };

    });
