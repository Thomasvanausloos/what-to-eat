import Router from 'express-promise-router';


const planningRouter = Router();

planningRouter.get('/test', (req, res) => console.log('planning router test works'));

export default planningRouter;
