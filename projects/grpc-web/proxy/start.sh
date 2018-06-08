docker build -t envoy-proxy -f Dockerfile-Envoy
docker run -d -p 9090:9090 envoy-proxy
