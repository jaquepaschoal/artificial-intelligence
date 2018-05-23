(function(win,document) {

  'use strict'

  function validate() {
    return {
      message: function message(msg,element,type) {
        this.clear();
        var $element = document.querySelector(element);
        var $createElement = document.createElement('p');
        var $message = document.createTextNode(msg);

        $createElement.className = type;
        $createElement.appendChild($message);

        $element.insertAdjacentElement('afterend', $createElement);

      },

      clear: function clear() {
        var $error = document.querySelector('.error');
        var $success = document.querySelector('.success');

        $error ? $error.remove() : '';
        $success ? $success.remove() : '';

      }
    }
  }

  win.validate = validate;
})(window,document)
