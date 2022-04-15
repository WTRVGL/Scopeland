FROM node:14-alpine
RUN apk update && apk upgrade && apk add python3 make g++
WORKDIR /app
COPY gatsby_client/package.json .
RUN npm install

RUN npm install --global gatsby-cli

ENV CHOKIDAR_USEPOLLING=1

COPY gatsby_client/ .

RUN gatsby build --prefix-paths
EXPOSE 9000
CMD gatsby serve --host 0.0.0.0 --prefix-paths