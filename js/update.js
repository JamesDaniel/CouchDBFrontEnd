/**
 * Created by user on 04/10/16.
 */
var myApp = angular.module("couchFront", [])
    .controller("mainController", function ($http) {
        var vm = this;

        vm.posts = [
            {
                "doc": {
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
                }
            }
        ];
        var req = {
            method: 'GET',
            url: 'http://localhost:5984/forum_post/_all_docs?include_docs=true'
        };

        var init = function () {
            $http(req).then(function(response) {
                vm.posts = response.data.rows;
            });
        };
        init();

        vm.update = function (post) {
            $http({
                method: 'PUT',
                url: 'http://localhost:5984/forum_post/' + post._id,
                headers: {"Content-Type": "application/json;charset=UTF-8"},
                data: post
            }).then(function () {
                init();
            });
        };

    });