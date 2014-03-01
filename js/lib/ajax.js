var $ = require('jquery');
var req;

function getContent(pageHTML) {
  var $dom = $.parseHTML(pageHTML);
  var content;
  $.each($dom, function(i, el) {
    if (el.id == 'wrapper') {
      var $content = $(el).find('div#content');
      content = $content.html();
    }
  });

  return content;
};

exports.fetchContent = function(url, cb) {
  req = $.get(url, function(pageHTML) {
    cb(getContent(pageHTML));
  });

  return req;
};

exports.abortReq = function() {
  if (req) req.abort();
};
