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

        vm.delete = function (post) {
            alert('called');
            $http({
                method: 'DELETE',
                url: 'http://localhost:5984/forum_post/' + post._id + '?rev=' + post._rev,
                headers: {
                    'Content-type': 'application/json',
                    'Host': 'localhost:5984',
                    //not working for chrome
                    //'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:49.0) Gecko/20100101 Firefox/49.0',
                    'Accept': 'application/json, text/plain, */*',
                    'Accept-Language': 'en-US,en;q=0.5',
                    'Accept-Encoding': 'gzip, deflate',
                    'Origin': 'null',
                    'Connection': 'keep-alive'
                }
            }).then(function () {
                alert('worked');
                init();
            });
        };

    });