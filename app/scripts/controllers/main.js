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

        var bg_img = "images/aaa.png";

        var lamanoSpec = function() {
            return {
                id: 1,
                large_img: "images/lamano.jpg",
                small_img: "images/lamano_small.jpg"
            };
        };

        var ypjSpec = function() {
            return {
                id: 2,
                large_img: "images/ypj.jpg",
                small_img: "images/ypj_small.jpg"
            };
        };

        var kartorpSpec = function() {
            return {
                id: 3,
                large_img: "images/sthlmantifa.jpg",
                small_img: "images/sthlmantifa_small.jpg"
            };
        };

        var limhamnSpec = function() {
            return {
                id: 4,
                large_img: "images/limhamn.jpg",
                small_img: "images/limhamn_small.jpg"
            };
        };

        $scope.flip = function(card) {
            card.flipped = !card.flipped;
            if (card.flipped)
                card.img = card.small_img;
            else
                card.img = bg_img;
        };

        var makeCard = function(cardSpec) {
            var card = _.merge(cardSpec, {
                img: bg_img,
                flipped: false
            });
            return card;
        };

        $scope.allCards = [makeCard(lamanoSpec()), makeCard(lamanoSpec()),
                           makeCard(limhamnSpec()), makeCard(limhamnSpec()),
                           makeCard(kartorpSpec()), makeCard(kartorpSpec()),
                           makeCard(ypjSpec()), makeCard(ypjSpec())];

        $scope.cards = _.chunk(_.shuffle($scope.allCards), 4);
    });
