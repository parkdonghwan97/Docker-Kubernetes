FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.mjs" ]


# node js 와 npm을 설치하지 않았음에도 사용할 수 있었다.!