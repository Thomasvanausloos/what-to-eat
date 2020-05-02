import express from 'express';
import AppRouter from './app.router';



let app = express();
app.use(AppRouter);
app.listen(3000);
