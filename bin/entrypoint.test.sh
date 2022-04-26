#!/bin/sh
yarn run wait-on http://lambda:8080/2015-03-31/functions/function/invocations && yarn test --watchAll
