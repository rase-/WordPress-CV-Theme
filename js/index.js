var nav = require('./lib/nav.js');
var ajax = require('./lib/ajax.js');
var dom = require('./lib/dom-helpers.js');

var $ = require('jquery');
var attachFastClick = require('fastclick');
attachFastClick(document.body);

var supportsHistoryAPI = require('./lib/supports-history-api.js');
var isSafari = ~navigator.userAgent.indexOf('Safari');
var isChrome = ~navigator.userAgent.indexOf('Chrome');

function setBackButtonHandler() {
  $('.back').click(function(e) {
    e.preventDefault();
    nav.goBack();
  });
};

function setClickHandlers() {
 $('.post a').click(function(e) {
    ajax.abortReq();

    // Navigate only if the url is in local context
    var $this = $(this);
    var permalink = $this.attr('href');
    if (!nav.isLocalUrl(permalink)) {
      return;
    }

    e.preventDefault();

    nav.saveScrollState(window.scrollY, window.location.href);
    var currentContent = dom.content();
    var post = dom.findParentByClass($this, 'post');

    // Clear the content and inject the content we've got now for best effect
    // and navigate to top to make it seem like we moved to another page
    dom.content('<div class="post single">' + post.html() + '</div>');
    $(document).scrollTop(0);

    // Enable back button
    dom.showBackArrow(true);

    // Navigate to new page and poll for new content
    nav.toPage(permalink);
    ajax.fetchContent(permalink, function(content) {
      if (content) {
        dom.content(content);
        nav.cacheContent(content, permalink);
        setClickHandlers();
      }
    });
  });
};

$(document).ready(function() {
  // Normal requests if histry API not supported
  if (!supportsHistoryAPI) return;

  setBackButtonHandler();

  setClickHandlers();
  nav.cacheContent(dom.content());

  $(window).on('popstate', function(event) {
    ajax.abortReq(); // Abort a possible existing request

    var e = event.originalEvent;
    console.log(e);

    // If we know the contents, we can just reuse it
    if (e.state && e.state.cached) {
      console.log('Using cached content');
      dom.showBackArrow(!e.state.isFirstPage);
      dom.content(e.state.cached);
      setClickHandlers();
      if (e.state.scrollState) {
        if (isSafari && !isChrome) { // user agent is purely safari
          setTimeout(function() {
            $(document).scrollTop(e.state.scrollState);
          }, 10);
        } else {
          $(document).scrollTop(e.state.scrollState);
        }
      }
      return;
    }

    // If the data isn't cached for some reason, let's fetch it
    ajax.fetchContent(window.location.href, function(content) {
      if (content) {
        dom.content(content);
        setClickHandlers();
      }
    });
  });
});
