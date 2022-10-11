// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    console.log(message,successCB);

    // Maybe this is where we do our templating?? TBD
    // Remember to escape user input before appending to DOM
    // use jQuery selector to get some existing element
    // Create some element
    // Append to some existing jQuery element

    $.ajax({
      //try to change to ES6
      url: Parse.server,
      type: 'POST',
      // data: '',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};