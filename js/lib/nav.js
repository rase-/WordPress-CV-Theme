exports.isLocalUrl = function(url) {
  var regex = new RegExp(location.host);
  return regex.test(url);
};

exports.toPage = function(url) {
  history.pushState({ isSingle: true }, 'changed', url);
};

exports.cacheContent = function(content, url) {
  history.replaceState({ cached: content, isSingle: !!url }, 'content', url);
};

exports.goBack = function() {
  history.back();
};
