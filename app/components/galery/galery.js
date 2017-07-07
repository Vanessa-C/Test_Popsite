"use strict";

angular.module("test")
    .component('galery', {
        templateUrl: '/app/components/galery/galery.html',
        controller: Galery
    })

function Galery() {
    this.test = "toto"
}