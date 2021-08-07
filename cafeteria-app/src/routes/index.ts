import IRoute from "../interfaces/routes";
import HomePage from "../pages/HomePage";

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    name: 'Home Page',
    protected: true
  }
]

export default routes;