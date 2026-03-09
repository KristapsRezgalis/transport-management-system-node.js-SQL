'use strict'

let ordersAll = [[1, 2, 3], [4, 5, 6]];

const forwarderForm = document.querySelector('forwarder-form');
const orderForm = document.querySelector('order-form');
const confirmButton = document.querySelector('button-confirm');


let insertNewOrder = function () {
    document.getElementById('enterOrder-container').style.display = 'none';
    console.log(`Form button pressed!`);
    console.log(`Number of transport order: ${ordersAll.length}`);

    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('button clicked');
    })
}

let insertNewForwarder = function () {
    document.getElementById('forwarder-container').style.display = 'none';
    console.log(`Forwarder form button pressed!`);
/*
    forwarderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('button clicked');
    })
*/
}


// menu function button to open forwarder modal
let openForwarderForm = function (){
    document.getElementById('forwarder-container').style.display = "block";
}
// menu function button to open order modal
let openOrderForm = function (){
    document.getElementById('enterOrder-container').style.display = "block";
}

confirmButton.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('button clicked');
});