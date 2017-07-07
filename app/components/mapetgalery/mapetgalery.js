"use strict";

angular.module("test")
    .component('mapetgalery', {
        templateUrl: '/app/components/mapetgalery/mapetgalery.html',
        controller: Mapetgalery
    })

function Mapetgalery() {
    this.test = "tutu"
}