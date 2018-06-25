#!/usr/bin/env bash

cd frontend
yarn
yarn start &
cd ..

bazel run //projects/grpc-web/backend:backend
bazel run //projects/grpc-web/proxy:start_envoy
