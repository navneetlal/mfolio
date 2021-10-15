import { Router as expressRouter } from 'express';
import CasRoute from './controllers/cas';

interface IRouter {
  path: string
  route: expressRouter
}

const router = expressRouter();

const routes: IRouter[] = [
  {
    path: '/cas',
    route: CasRoute,
  }
];

routes.forEach((r) => router.use(r.path, r.route));

export { IRouter };
export default router;
