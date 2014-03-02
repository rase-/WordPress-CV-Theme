var expect = require('expect.js');
var nav = require('../lib/nav.js');

describe('navigation', function() {
  it('should be able to move another local url', function() {
    var url = location.href + 'moved';
    nav.toPage(url);
    expect(location.href).to.be(url);
    nav.goBack();
  });

  it('should be able to cache some content related to browser state', function() {
    nav.cacheContent('cached contents');
    expect(history.state).to.be.ok();
    expect(history.state.cached).to.be('cached contents');
  });

  it('should be able to recognize local and external urls', function() {
    expect(nav.isLocalUrl(location.href + 'moved')).to.be.ok();
    expect(nav.isLocalUrl('http://google.com')).to.not.be.ok();
  });
});
