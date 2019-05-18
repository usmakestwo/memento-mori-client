#!/bin/bash

# Purpose: Build a Docker Image of the memento-mori-universitas client
#
# Author: Gonzalo Vazquez, gvazquez@usmakestwo.io
#
# Parameters:
# $3: Version of application
# Example:
# ./build-deploy.sh 1.0.0

xVERSION=$1

if [ -z $1 ]; then
   echo "Missing version"
   exit
fi

echo "Building memento-mori-universitas..."
npm install
next export
echo "Building Docker image with version $xVERSION"
docker build -t gcr.io/memento-mori-universitas/client-application:$xVERSION -t gcr.io/memento-mori-universitas/client-application:latest . --no-cache=true
echo "Image memento-mori-universitas built with version $xVERSION"