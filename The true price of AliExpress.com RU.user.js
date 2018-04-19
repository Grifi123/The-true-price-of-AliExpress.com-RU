// ==UserScript==
// @name         The true price of AliExpress.com RU
// @namespace    https://vk.com/id127306664
// @version      1.3
// @description  Shows the cost of goods with delivery. Now working only with the ruble.
// @author       Grifi
// @match        *.aliexpress.com/*
// @match        aliexpress.com/*
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    for (var i = 0; i < $(".infoprice").length ; i++) {
    var price = $(".infoprice").eq(i).find(".value");
        var body = $(".infoprice").eq(i).html();
        var pricett = price.eq(0).text().substr(0, price.eq(0).text().length - 5);
        if(price.length != 1 &&  pricett.indexOf('-') == -1){
            var prices = price.eq(1).text().substr(0, price.eq(1).text().length - 5);
            var pricets = Number(pricett.replace(",", ".").replace(/\s/g, ''))+Number(prices.replace(",", ".").replace(/\s/g, ''));
            $(".infoprice").eq(i).html('<span style="color: green;font-weight: 700;font-size: 16px;">'+pricets.toFixed(2)+' руб</span>'+body);
        } else if(price.length != 1 && pricett.indexOf('-') != -1){
            var pricet=pricett.substr(0, pricett.indexOf('-')-1);
            var prices = price.eq(1).text().substr(0, price.eq(1).text().length - 5);
            var pricets = Number(pricet.replace(",", ".").replace(/\s/g, ''))+Number(prices.replace(",", ".").replace(/\s/g, ''));
            $(".infoprice").eq(i).html('<span style="color: red;font-weight: 700;font-size: 16px;">↓'+pricets.toFixed(2)+' руб</span>'+body);
            pricet=pricett.substr(pricett.indexOf('-')+1);
            pricets = Number(pricet.replace(",", ".").replace(/\s/g, ''))+Number(prices.replace(",", ".").replace(/\s/g, ''));
            body = $(".infoprice").eq(i).html();
            $(".infoprice").eq(i).html('<span style="color: green;font-weight: 700;font-size: 16px;">↑'+pricets.toFixed(2)+' руб</span>'+body);
        }


}



})();
