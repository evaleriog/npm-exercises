"use strict";
const $ = require('jquery');

//import $ from 'jquery';

import message from './say-hello.js';

(() => {

    const sayHello = () => {console.log("Hello")};
    sayHello();

    $('body').html('<h1>Hello World!!!</h1>');
    $('body').css('background-color', 'yellow');

    const {item, thing} = require('./practice.js');

    console.log(item.color);

    console.log(message("Eduardo"));


})();
