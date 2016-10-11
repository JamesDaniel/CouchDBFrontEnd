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

        //update function will be called by a button click in the html.
        //update function referenced in html as follows: ng-click="controller.update(data.doc)"
        vm.update = function (post) {
            $http({
                method: 'PUT',
                url: 'http://localhost:5984/forum_post/' + post._id,
                headers: {"Content-Type": "application/json;charset=UTF-8"},
                data: post
            }).then(function () {
                //after updating a forum post, get all documents from database and refresh the view.
                init();
            });
        };

    });