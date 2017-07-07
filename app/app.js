"use strict";

angular.module("test", [
        
        "ui.router",
        "ngResource",
    ])
    .config(
        function ($stateProvider, $urlRouterProvider) {
            var states = [
                {   name: "mapetgalery",
                    url: "/",
                    component: "mapetgalery"
                },
                {
                    name: "galeryonly",
                    url: "/galeryonly",
                    component: "galeryonly",
                },
                {
                    name: "maponly",
                    url: "/maponly",
                    component: "maponly",
                }

            ];
            $urlRouterProvider.otherwise("/");
            states.forEach(function (state) {
                $stateProvider.state(state);
            })
        });