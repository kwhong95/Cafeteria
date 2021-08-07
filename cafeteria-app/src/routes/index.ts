import IRoute from "../interfaces/routes";
import HomePage from "../pages/HomePage";
import ResisterPage from "../pages/auth/resister";
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
    path: '/resister',
    exact: true,
    component: ResisterPage,
    name: 'Resister Page',
    protected: false
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
    name: 'Login Page',
    protected: false,
  }
]

export default routes;