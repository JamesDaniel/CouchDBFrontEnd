/**
 * Created by user on 04/10/16.
 */
//reference to angular application
//create angular module which will be referenced in html with ng-app="couchFront"
var myApp = angular.module("couchFront", [])
    //controller created to set functionality of a portion of a web page.
    //controller will be referenced in html with ng-controller="mainController".
    .controller("mainController", function ($http) {

        //any object or function attached to vm will be accessible in this controllers portion of html code.
        var vm = this;

        //stub object with same structure as database document.
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

        //request object parameters
        var req = {
            method: 'GET',
            url: 'http://localhost:5984/forum_post/_all_docs?include_docs=true'
        };

        //init function will get documents from database and populate them in the html which will update the view.
        var init = function () {
            $http(req).then(function(response) {
                vm.posts = response.data.rows;
            });
        };
        //call the init function for the first time after it has been defined.
        init();

        //delete function will be called by a button click in the html.
        //delete function referenced in html as follows: ng-click="controller.delete(data.doc)"
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