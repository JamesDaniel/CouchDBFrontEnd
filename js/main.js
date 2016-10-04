/**
 * Created by user on 04/10/16.
 */
var myApp = angular.module("couchFront", [])
    .controller("mainController", function ($scope) {

        var hardAllPosts =
        {
            "total_rows": 2,
            "offset": 0,
            "rows": [
                {
                    "id": "0700e3c7c9f62691627e5bad03001820",
                    "key": "0700e3c7c9f62691627e5bad03001820",
                    "value": {
                        "rev": "1-dd92022d5673f77913ff4081180ad46d"
                    },
                    "doc": {
                        "_id": "0700e3c7c9f62691627e5bad03001820",
                        "_rev": "1-dd92022d5673f77913ff4081180ad46d",
                        "user": {
                            "username": "Griffo",
                            "firstname": "Ciaran",
                            "lastname": "Griffin",
                            "dateOfBirth": 427594500000
                        },
                        "forum": {
                            "name": "cats and dogs",
                            "description": "why cats and dogs don't get along"
                        },
                        "forumPost": {
                            "messageTitle": "Brutal story",
                            "message": "My cat ate my dog"
                        }
                    }
                },
                {
                    "id": "4bb5d2597cafab3ada89abf99700050f",
                    "key": "4bb5d2597cafab3ada89abf99700050f",
                    "value": {
                        "rev": "1-dd92022d5673f77913ff4081180ad46d"
                    },
                    "doc": {
                        "_id": "4bb5d2597cafab3ada89abf99700050f",
                        "_rev": "1-dd92022d5673f77913ff4081180ad46d",
                        "user": {
                            "username": "Griffo",
                            "firstname": "Ciaran",
                            "lastname": "Griffin",
                            "dateOfBirth": 427594500000
                        },
                        "forum": {
                            "name": "cats and dogs",
                            "description": "why cats and dogs don't get along"
                        },
                        "forumPost": {
                            "message title": "Brutal story",
                            "message": "My cat ate my dog"
                        }
                    }
                }
            ]
        };




        $scope.posts = hardAllPosts;
    });