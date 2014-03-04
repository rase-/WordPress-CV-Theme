WordPress CV-Theme
==================

A very professional looking, easy to keep up to date CV theme for WordPress. Here is a [sample](http://tonykova.users.cs.helsinki.fi/wordpress/).

How it works
------------

The first post created will be put on the right side of the page when viewing
all posts. This is where you should put an image and a name, for example.

All consequent posts are shown as CV entries on the left.

For a mobile platform the post on the right is moved to the top.

Easy to use
-----------

Just clone this repository in your WordPress installation's wp-content/themes folder, and go to your settings to select it. Remember permissions for resources like CSS.

Fast
----

The theme uses the HTML5 history API to bring you an incredible user experience, where the users sees immediate consequences for interactions. Some content is immediately shown, and more content displayed whenever it gets loaded.

Tricks
------

### Change the order of posts
Change the publish date of your posts. They are
shown according to publish date.

### Create a circular image in your first post
Add an `img` tag with the
class `circular`. This is built in directly into the theme.

Development
-----------

The project consists of the usual theme related PHP files in the root directory.
JavaScripts are found in the js folder. To build the JavaScript file invoke
`make build`. Be sure to have npm installed, and invoke `npm install` before
trying to build the js.
