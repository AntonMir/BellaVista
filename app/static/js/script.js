'use strict'
import {sandMessage} from './api.js'

$(document).ready( function() {
  
  $('.meeting-form').submit( function(e) {
    // это функция обработки событий (при создании события, 
    // объекта). "e" - обработчик объекта 
    // (объект становится доступным)

    e.preventDefault()
    // блок отправки формы из HTML
    // Если будет вызван данный метод,
    // то действие события по умолчанию не будет выполнено


    let obj = $(this).serializeArray()
    // собирает данные из формы в объект 
    // используется при POST

    // let obj = $(this).serialize() 
    // собирает данные из формы в одну строку 
    // используется при GET
    
    console.log(obj)
    // console.log(obj2)

    
    sandMessage(obj);
  })

})


