'use strict';

/**
 * @ngdoc function
 * @name klasskrigApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the klasskrigApp
 */
angular.module('klasskrigApp')
    .controller('MainCtrl', function ($scope, $location, $anchorScroll, $timeout) {

        $scope.bg_img = "images/aaa.png";

        var default_infobox = {
            bad: false,
            title: "Förbundet Allt åt Alla",
            text: "Vi är en revolutionär organisation med målsättning att skapa ett samhälle organiserat efter principen: av var och en efter förmåga, åt var och en efter behov. Vi välkomnar en mångfald av taktiker, strategier liksom organisationer och nätverk i kampen för klassamhällets avskaffande."+
                "\n\n" +
                "Allt åt alla bejakar inte våld. Våra aktioner är ibland militanta och konfrontativa, men det inte samma sak. Vi tar inte heller kategoriskt avstånd från alla politiska grupper som använder våld."
        };

        $scope.infobox = default_infobox;

        var lamanoSpec = function() {
            return {
                id: 1,
                bad: false,
                title: "Spanienfrivilliga",
                text: "Under spanska inbördeskriget (1936-1939) åker hundratals komunister och anarkister från Sverige till Spanien för att kämpa mot Franco och fascisterna. Många offrar sina liv. På Katarinavägen i Stockholm står 'La Mano', ett monument för att hedra deras minne."+
                    "\n\n"+
                    "Vi inspireras av dessa antifascisters mod och solidaritet med det Spanska folket. Antifascism är självförsvar och detta var nödvändigt politiskt våld. Vad tror du hade hänt om facisterna inte besegrats?",
                large_img: "images/lamano.jpg",
                small_img: "images/lamano_small.jpg"
            };
        };

        var ypjSpec = function() {
            return {
                id: 2,
                bad: false,
                title: "YPG & YPJ",
                text: "Kurder kämpar mot IS",
                large_img: "images/ypj.jpg",
                small_img: "images/ypj_small.jpg"
            };
        };

        var kartorpSpec = function() {
            return {
                id: 3,
                bad: false,
                title: "Kärrtorpsattacken",
                text: "Antifascister försvarar sig mot nazister som går till angrepp",
                large_img: "images/sthlmantifa.jpg",
                small_img: "images/sthlmantifa_small.jpg"
            };
        };

        var limhamnSpec = function() {
            return {
                id: 4,
                bad: true,
                title: "Polisen i Limhamn",
                text: "Statens politiska våld. Skyddar nazister angriper antifascister.",
                large_img: "images/limhamn.jpg",
                small_img: "images/limhamn_small.jpg"
            };
        };

        var makeCard = function(cardSpec) {
            var card = _.merge(cardSpec, {
                matched: false,
                flipped: false
            });
            return card;
        };

        $scope.firstPick = null;
        $scope.pick = function(card) {
            if (card.flipped) {
                $scope.selected = card;
                $scope.infobox = card;
                return; // Allready picked
            }

            card.flipped = true;

            // First of a pair, just pick it
            if ($scope.firstPick === null) {
                $scope.firstPick = card;
                $scope.selected = card;
                $scope.infobox = card;
            }
            else { // Second pick, is a match?

                // Yes, it's a match
                if ($scope.firstPick.id === card.id) {


                    $scope.firstPick.matched = true;
                    card.matched = true;

                    $scope.selected = card;
                    $scope.infobox = card;
                    $scope.firstPick = null;

                }
                else { // Nope, no match


                    $timeout(function() {
                        $scope.firstPick.flipped = false;

                        $scope.selected = null;
                        $scope.infobox = default_infobox;

                        card.flipped = false;

                        $scope.firstPick = null;
                     }, 1000);

                }
            }
        };


        $scope.allCards = [makeCard(lamanoSpec()), makeCard(lamanoSpec()),
                           makeCard(limhamnSpec()), makeCard(limhamnSpec()),
                           makeCard(kartorpSpec()), makeCard(kartorpSpec()),
                           makeCard(ypjSpec()), makeCard(ypjSpec())];

        $scope.cards = _.chunk(_.shuffle($scope.allCards), 4);


    });
