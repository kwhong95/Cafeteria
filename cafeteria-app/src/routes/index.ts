import IRoute from "../interfaces/routes";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/auth/auth";

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    name: 'Home Page',
    protected: true
  },
  {
    path: '/auth',
    exact: true,
    component: AuthPage,
    name: 'Auth Page',
    protected: false
  },
]

export default routes;