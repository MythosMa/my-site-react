export BUILD_IMG_TAG=1.3.0

sh .docker/check-docker.sh

npm install
npm run build

cp .docker/Dockerfile ./

docker buildx build \
   --platform=linux/amd64 \
   --tag mythosma/my-site:$BUILD_IMG_TAG \
   --push -t mythosma/my-site:$BUILD_IMG_TAG .

# docker tag my-site mythosma/my-site:$BUILD_IMG_TAG
# docker push mythosma/my-site:$BUILD_IMG_TAG

rm -f Dockerfile
rm -rf dist

