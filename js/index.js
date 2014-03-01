var nav = require('./lib/nav.js');
var ajax = require('./lib/ajax.js');
var helpers = require('./lib/dom-helpers.js');

var $ = require('jquery');
var attachFastClick = require('fastclick');
attachFastClick(document.body);

var supportsHistoryAPI = require('./lib/supports-history-api.js');

function setClickHandlers() {
  $('.back').click(function(e) {
    e.preventDefault();
    nav.goBack();
  });

  $('.post a').click(function(e) {
    e.preventDefault();
    ajax.abortReq();

    // Navigate only if the url is in local context
    var $this = $(this);
    var permalink = $this.attr('href');
    if (!nav.isLocalUrl(permalink)) {
      return;
    }

    var currentContent = helpers.content();
    var post = helpers.findParentByClass($this, 'post');

    // Clear the content and inject the content we've got now for best effect
    var backLink = helpers.backLinkStr;
    helpers.content('<div class="post single">' + post.html() + backLink + '</div>');

    // Enable back button
    helpers.showBackArrow(true);

    // Navigate to new page and poll for new content
    nav.toPage(permalink);
    ajax.fetchContent(permalink, function(content) {
      if (content) {
        helpers.content(content);
        nav.cacheContent(content, permalink);
        setClickHandlers();
      }
    });
  });
};

$(document).ready(function() {
  // Normal requests if histry API not supported
  if (!supportsHistoryAPI) return;

  setClickHandlers();
  nav.cacheContent(helpers.content());

  $(window).on('popstate', function(event) {
    ajax.abortReq(); // Abort a possible existing request

    var e = event.originalEvent;
    console.log(e);

    // If we know the contents, we can just reuse it
    if (e.state && e.state.cached) {
      console.log('Using cached content');
      helpers.showBackArrow(e.state.isSingle);
      helpers.content(e.state.cached);
      setClickHandlers();
      return;
    }

    // If the data isn't cached for some reason, let's fetch it
    ajax.fetchContent(window.location.href, function(content) {
      if (content) {
        helpers.content(content);
        setClickHandlers();
      }
    });
  });
});
