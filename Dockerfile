FROM node

WORKDIR /code

ENV PORT 3001

COPY package.json /code/package.json

RUN npm install

COPY . /code

CMD ["node", "src/server.js"]