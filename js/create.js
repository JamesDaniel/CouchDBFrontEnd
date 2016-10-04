/**
 * Created by user on 04/10/16.
 */
var myApp = angular.module("couchFront", [])
    .controller("mainController", function ($scope, $http) {
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

        $scope.addPostToDatabase = function () {
            alert('called');
            $http({
                method  : 'POST',
                url     : 'http://localhost:5984/forum_post',
                data    : $scope.newPost,
                headers : {'Content-Type': 'application/json'}
            }).then(function(response) {
                alert('yahoo');
            });
        };

    });