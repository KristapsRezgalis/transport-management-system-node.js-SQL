'use strict'

let ordersAll = [[1, 2, 3], [4, 5, 6]];

let createTransportData = function () {
    console.log(`Number of transport order: ${ordersAll.length}`);
}

let insertNewOrder = function () {
    document.getElementById('enterOrder-container').style.display = 'none';
    console.log(`Form button pressed!`);
}