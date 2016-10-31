var $ = require('jquery');
var accordion = require('aria-accordion');

$('.js-accordion').each(function(){
  var contentPrefix = $(this).data('content-prefix') || 'accordion';
  var openFirst = $(this).data('open-first') || false;
  var opts = {
    contentPrefix: contentPrefix,
    openFirst: openFirst
  };
  new accordion.Accordion({}, opts);
});
