#!/usr/bin/env bash

cwd=$(pwd)
workspace=$(bazel info workspace)
cd $workspace/projects/grpc-web/frontend

bazel build //projects/grpc-web/proto:ts_proto
rm -rf src/external/proto
mkdir -p src/external/projects/grpc-web
cp -r $workspace/bazel-bin/projects/grpc-web/proto src/external/projects/grpc-web

cd $cwd

