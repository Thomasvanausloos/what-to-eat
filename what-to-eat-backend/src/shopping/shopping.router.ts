import Router from 'express-promise-router';


const shoppingRouter = Router();

shoppingRouter.get('/test', (req, res) => console.log('shopping router test works'));

export default shoppingRouter;
