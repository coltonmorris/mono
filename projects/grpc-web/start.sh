bazel run //projects/grpc-web/backend:backend
bazel run //projects/grpc-web/proxy:start_envoy &

cd frontend
yarn start
