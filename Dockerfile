FROM node:12

WORKDIR /test

COPY . .

RUN npm install

CMD npm start

