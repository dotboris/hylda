#!/bin/bash
set -e

concurrently \
  -n 'hugo,gulp,lint:js,lint:sass' \
  -c 'green,cyan,yellow,yellow' \
  'cd example && hugo serve' \
  'gulp watch' \
  'run-s lint:js:watch' \
  'run-s lint:sass:watch'
