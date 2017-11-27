var $ = require('jquery');
var accordion = require('aria-accordion');
var A11yDialog = require('a11y-dialog');
var datefilter = require('./date-filter');
var dropdown = require('./dropdowns');

function KeywordModal() {
  this.elm = document.querySelector('.js-keyword-modal');
  this.$elm = $(this.elm);
  this.dialog = new A11yDialog(this.elm);
}

$('.js-accordion').each(function(){
  var contentPrefix = $(this).data('content-prefix') || 'accordion';
  var openFirst = $(this).data('open-first') || false;
  var opts = {
    contentPrefix: contentPrefix,
    openFirst: openFirst
  };
  new accordion.Accordion({}, opts);
});

$('.js-dropdown').each(function() {
  new dropdown.Dropdown(this);
});

if ($('.js-keyword-modal').length > 0) {
  new KeywordModal();
}

if ($('.js-date-range').length > 0) {
  new datefilter.DateFilter();
}
