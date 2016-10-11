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

        //request being made
        $http(req).then(function(response) {

            //action taken after request.
            //data from the database stored in vm.posts and the html will re-render as a result of the change.
            vm.posts = response.data.rows;
            console.log('YES! ' + JSON.stringify(response));
        });

    });