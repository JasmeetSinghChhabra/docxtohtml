FROM node:12

WORKDIR /docxtohtml

COPY . .

RUN npm install

EXPOSE 80

CMD npm start

