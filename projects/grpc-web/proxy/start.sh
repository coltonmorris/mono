docker build -t envoy-proxy -f ./Dockerfile-Envoy .

# kill the already running instance of envoy-proxy
docker kill `docker ps | grep 'envoy-proxy' | awk ' { print $1 } '`

docker run -d -p 9090:9090 envoy-proxy
