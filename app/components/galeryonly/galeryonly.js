"use strict";

angular.module("test")
    .component('galeryonly', {
        templateUrl: '/app/components/galeryonly/galeryonly.html',
        controller: Galeryonly
    })

function Galeryonly() {
    this.test = "tutu"
}