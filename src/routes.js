import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

routes.use(logRequestsMiddleware);

routes.post('/login', SessionController.store);
routes.get('/users', UserController.index);
routes.get('/users/:uid', UserController.show);
routes.post('/users', UserController.store);

export default routes;
