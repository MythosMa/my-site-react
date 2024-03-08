export BUILD_IMG_TAG=1.2.0

sh .docker/check-docker.sh

yarn install
yarn build

cp .docker/Dockerfile ./

docker buildx build \
   --platform=linux/amd64,linux/arm64/v8 \
   --tag mythosma/my-site:$BUILD_IMG_TAG \
   --push -t mythosma/my-site:$BUILD_IMG_TAG .

# docker tag my-site mythosma/my-site:$BUILD_IMG_TAG
# docker push mythosma/my-site:$BUILD_IMG_TAG

rm -f Dockerfile
rm -rf dist
