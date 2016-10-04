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
        $http(req).then(function(response) {
            vm.posts = response.data.rows;
            console.log('YES! ' + JSON.stringify(response));
        });

    });