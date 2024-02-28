FROM node:18.19.0-buster-slim

WORKDIR /App/

COPY public/ /App/public
COPY src/ /App/src
COPY package-lock.json /App/
COPY package.json /App/

RUN npm install

CMD ["npm","start"]














