(function(validate){

  'use strict'

  var $buttonSend = document.querySelector("[data-js='btn-send']");
  $buttonSend.addEventListener('click', getData);

  function getData(e) {

    e.preventDefault();

    var $name = document.querySelector("[data-js='name']").value;
    var $email = document.querySelector("[data-js='email']").value;
    var $message = document.querySelector("[data-js='message']").value;

    if($name === '' || $email === '' || $message === '') {
      validate().message('Fill in all the fields!', "[data-js='message']",'error');
    } else {
      insertMessage($name,$email,$message);
    }

  }

  function insertMessage (name,email,message) {
    var request = ajax({
      method: 'post',
      url: validate().getUrl.urlApi + 'suggestion',
      data: {
        name: name ,
        email: email,
        message: message
      }
    })

    request.then(function (response) {
      if(response.error) {
        validate().message('The email must be a valid email address.', "[data-js='message']",'error');
      } else {
        validate().message('Suggestion sent successfully!', "[data-js='message']",'success');
      }
    })
  }


})(window.validate)
