#!/bin/sh
# Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.

if [ $# -ne 1 ]; then
  echo "entrypoint requires the handler name to be the first argument" 1>&2
  exit 142
fi
export _HANDLER="$1"

RUNTIME_ENTRYPOINT=/var/runtime/bootstrap
if [ -z "${AWS_LAMBDA_RUNTIME_API}" ]; then
  # Install dependencies
  npm install -g yarn
  yarn
  # Build app
  yarn build
  exec /usr/local/bin/aws-lambda-rie $RUNTIME_ENTRYPOINT &
  # Watch src directory and re-build app
  while inotifywait -r src -e create,delete,modify; do
    yarn build
    pkill lambda
    exec /usr/local/bin/aws-lambda-rie $RUNTIME_ENTRYPOINT &
  done
else
  exec $RUNTIME_ENTRYPOINT
fi
