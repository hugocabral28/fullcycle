FROM node:slim AS nodeBuilder

WORKDIR /usr/src/app-node

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY package.json /usr/src/app-node/
#mover node_modules para uma /pasta
RUN npm install \
    && mv node_modules /node_modules

COPY . /usr/src/app-node

EXPOSE 3000
