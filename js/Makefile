REPORTER = dot

build: javascripts.js

javascripts.js:
	./node_modules/browserify/bin/cmd.js index.js -o javascripts.js

test:
	@./node_modules/.bin/zuul -- test/index.js

clean:
	rm javascripts.js

.PHONY: test
