'use strict'
import {alertMessage} from './common.js'



export function sandMessage(obj) {
  
  $.ajax({
    data : obj,
    type : 'POST',
    url : '/add_message',
    success: (response) => {
      console.log(response);
      $('.output').html(response.result)
      alertMessage(response)
    },
    error : (response, status, error) => {
      console.log(error);
    }
  })

}