export BUILD_IMG_TAG=1.3.6

sh .docker/check-docker.sh

pnpm install
pnpm run build

cp .docker/Dockerfile ./

docker buildx build \
   --platform=linux/amd64 \
   --tag ccr.ccs.tencentyun.com/mythosma/my-site:$BUILD_IMG_TAG \
   --push -t ccr.ccs.tencentyun.com/mythosma/my-site:$BUILD_IMG_TAG .

# docker tag my-site mythosma/my-site:$BUILD_IMG_TAG
# docker push mythosma/my-site:$BUILD_IMG_TAG

rm -f Dockerfile
rm -rf dist

