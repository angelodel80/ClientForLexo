var app = angular.module('app', []);

angular.module('app').controller("lexoController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    console.log('activate controller for lexo');
    $scope.lemma = {}; // $scope.podcast = {};
    $scope.lemma.writtenRep = 'آدَبَ';
    $scope.lemma.root = 'ء د ب';
    $scope.lemma.shortForm = 'آدَبَ_ar_sense1';
    $scope.lemma.senses = 'to invite, ask to come';
    


    $scope.getLemmata = function () {
        //url = "http://ditmao-dev.ilc.cnr.it:8082/alqamus/api/lexicon/lemmas";
        url = "http://ditmao-dev.ilc.cnr.it:8082/RESTfulExample/rest/json/saussure/get";
        $http({
            method: 'GET',
            url: url
        }).
        success(function (data, status, headers, config) {
            console.log('in success GET di getLemmata', data);
            $scope.lemmaList = data;
        }).
        error(function (data, status, headers, config) {
            console.log('in error GET di getLemmata', data);
            $scope.apps = data || "Request failed";
            $scope.status = status;
        });
    };

    $scope.viewLemma = function (lemma) {
        //http://ditmao-dev.ilc.cnr.it:8082/alqamus/api/lexicon/lemma/آدَبَ
        url = "http://ditmao-dev.ilc.cnr.it:8082/alqamus/api/lexicon/lemma/" + lemma;
        //url = "http://ditmao-dev.ilc.cnr.it:8082/alqamus/api/lexicon/lemma/" + lemma;
        
        console.log(url);
        $http({
            method: 'GET',
            url: url
        }).
        success(function (data, status, headers, config) {
            console.log('in succes getLemma', data);
            $scope.lemma = data;
        }).
        error(function (data, status, headers, config) {
            console.log('in error getLemma', data);
            $scope.apps = data || "Request failed";
            $scope.status = status;
        });


    }

   /* $scope.deletePodcast = function (id) {

        url = "http://localhost:8080/lab7/rest/podcasts/" + id;
        console.log(url);
        $http({
            method: 'DELETE',
            url: url
        }).
        success(function (data, status, headers, config) {
            $scope.podcast = data;
        }).
        error(function (data, status, headers, config) {
            $scope.apps = data || "Request failed";
            $scope.status = status;
        });

        $window.location.reload();
    }*/


 /*   $scope.submitForm = function () {
        $http({
            method: 'POST',
            url: 'http://localhost:8080/lab7/rest/podcasts',
            data: $scope.podcast, //forms podcast object
            headers: {
                'Content-Type': 'application/json'
            }
        }).
        success(function (data, status, headers, config) {
            $scope.podcast = data;
        }).
        error(function (data, status, headers, config) {
            $scope.apps = data || "Request failed";
            $scope.status = status;
        });
        $window.location.reload();
    }

    $scope.updatePodcast = function (id) {
        $http({
            method: 'PUT',
            url: 'http://localhost:8080/lab7/rest/podcasts/' + id,
            data: $scope.podcast, //forms podcast object
            headers: {
                'Content-Type': 'application/json'
            }
        }).
        success(function (data, status, headers, config) {
            $scope.podcast = data;
        }).
        error(function (data, status, headers, config) {
            $scope.apps = data || "Request failed";
            $scope.status = status;
        });
        $window.location.reload();
    }
*/
    $scope.searchLemma = function () {
        url = "/search?q=" + $scope.searchVal;
        console.log(url);
        $http({
            method: 'GET',
            url: url
        }).
        success(function (data, status, headers, config) {
            $scope.podcastsList = data;
        }).
        error(function (data, status, headers, config) {
            $scope.apps = data || "Request failed";
            $scope.status = status;
        });


    }

}]);