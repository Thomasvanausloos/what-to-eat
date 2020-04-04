import express from 'express';
import Router from 'express-promise-router';


let appRouter = Router();
appRouter.get('/test', () => console.log('test works'))

let app = express();
app.use(appRouter)
app.listen(3000);