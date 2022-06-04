import express from 'express';

import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');  // 더미  html 파일을 보냄 
});

await connectToDatabase(); // DB연결 코드

app.listen(3000);   // 3000번 포트에서 웹 서버를 시작하여 특정하지 않은 경로에서 요청을 수신하기위해 수신 대기중
