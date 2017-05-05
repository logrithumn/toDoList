console.log('hello');

let template = require('./views/call_partial.hbs');
$('.call_partial').append(template())
