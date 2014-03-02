var expect = require('expect.js');
var ajax = require('../lib/ajax.js');

describe('ajax', function() {
  it('should should return undefined when improper HTML provided for getting content (without div#wrapper)', function() {
    var content = ajax.getContent('<div id="random">this is some content</div>');
    expect(content).to.be(undefined);
  });

  it('should return undefined when getting content with proper div#wrapper tag but no div#content', function() {
    var content = ajax.getContent('<div id="wrapper"><div id="random">this is some content</div></div>');
    expect(content).to.be(undefined);
  });

  it('should return contents of the div#content element for getting content when proper HTML given', function() {
    var content = ajax.getContent('<div id="wrapper"><div id="content">this is some content</div></div>');
    expect(content).to.be('this is some content');
  });
});
