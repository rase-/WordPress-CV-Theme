var $ = require('jquery');

exports.content = function(content) {
  if (!content) {
    return $('div#content').html();
  }

  $('div#content').html(content);
};

exports.findParentByClass = function(elem, clazz) {
  while (!elem.hasClass(clazz)) {
    elem = elem.parent();
  }
  return elem;
};

exports.backLinkStr = (function() {
  var backFun = function(e) { e.preventDefault(); nav.goBack() };
  return '<p id="back"><a id="back" href="#" onclick="backFun()">Back</a></p>';
})();

exports.showBackArrow = function(show) {
  if (!show) {
    $('.nav').addClass('hidden');
  } else {
    $('.nav').removeClass('hidden');
  }
};
