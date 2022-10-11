FROM node:14

WORKDIR /test-pitjarus
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3030
CMD npm start
