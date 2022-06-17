FROM node:16

WORKDIR /srv/app

COPY package*.json ./
RUN npm install

