/**
 * Created by user on 04/10/16.
 */
var myApp = angular.module("couchFront", [])
    .controller("mainController", function ($http) {
        var vm = this;

        vm.rows = [
            {
                key: "",
                value: ""
            }
        ];

        var req = {
            method: 'GET',
            url: 'http://localhost:5984/forum_post/_design/forum_maps/_view/sum_each_forum?group=true'
        };
        $http(req).then(function(response) {
            vm.rows = response.data.rows;
            console.log('YES! ' + JSON.stringify(response.data));
        });

    });