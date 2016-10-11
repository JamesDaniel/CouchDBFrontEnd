/**
 * Created by user on 04/10/16.
 */
//reference to angular application
var myApp;
//create angular module which will be referenced in html with ng-app="couchFront"
myApp = angular.module("couchFront", [])
    //controller created to set functionality of a portion of a web page.
    //controller will be referenced in html with ng-controller="mainController".
    .controller("mainController", function ($scope, $http) {

        //stub object with same structure as database document.
        $scope.newPost = {
            "user": {
                "username": "",
                "firstname": "",
                "lastname": "",
                "dateOfBirth": 0
            },
            "forum": {
                "name": "",
                "description": ""
            },
            "forumPost": {
                "messageTitle": "",
                "message": ""
            }
        };

        //function to make POST request refetenced from html with ng-click="addPostToDatabase()"
        $scope.addPostToDatabase = function () {
            alert('called');
            $http({
                method: 'POST',
                url: 'http://localhost:5984/forum_post',
                data: $scope.newPost,
                headers: {'Content-Type': 'application/json'}
            }).then(function (response) {
                //action taken after post request finishes.
                alert('yahoo');
            });
        };

    });