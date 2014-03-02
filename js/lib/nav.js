exports.isLocalUrl = function(url) {
  var regex = new RegExp(location.host);
  return regex.test(url);
};

exports.toPage = function(url) {
  history.pushState({ isFirstPage: false }, 'changed', url);
};

exports.cacheContent = function(content, url) {
  history.replaceState({ cached: content, isFirstPage: !url }, 'content', url);
};

exports.goBack = function() {
  history.back();
};
