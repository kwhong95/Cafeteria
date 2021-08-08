import IRoute from "../interfaces/routes";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/login";

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
    component: LoginPage,
    name: 'Resister Page',
    protected: false
  },
]

export default routes;