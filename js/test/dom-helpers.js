var expect = require('expect.js');
var $ = require('jquery');
var helpers = require('../lib/dom-helpers.js');

describe('dom-helpers', function() {
  it('finding parent by class should return self it has the class', function() {
    var html = '<div class="clazz">the content</div>';
    var $dom = $.parseHTML(html);
    var elem = helpers.findParentByClass($($dom[0]), 'clazz');
    expect(elem.html()).to.be('the content');
  });

  it('finding parent by class should return direct parent when it has the class', function() {
    var html = '<div class="clazz"><p id="child"></p></div>';
    var $dom = $.parseHTML(html);
    var elem = helpers.findParentByClass($($dom[0]).find('p').first(), 'clazz');
    expect(elem.html()).to.be('<p id="child"></p>');
  });
});
