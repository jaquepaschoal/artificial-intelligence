/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
(function(validate){

  'use strict'

  var urlBase = window.location.href;
  var urlLogin = validate().getUrl.urlFront + 'pages/login.html';
  sessionStorage.getItem('token') == '' ? window.location = urlLogin : verifyAuthentication(urlBase);

  function verifyAuthentication(url) {
    var request = ajax({
      method: 'get',
      url: validate().getUrl.urlApi + 'auth',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      }
    })

    request.then(function (response) {
      if(response.error) {
        window.location = urlLogin;
      }
    })
  }

})(window.validate)
