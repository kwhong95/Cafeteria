import React, { useEffect, useState } from 'react';
import './app.css'
import { auth } from "./config/firebase";
import logging from "./config/logging";
import {Switch, Route, RouteComponentProps} from "react-router-dom";
import routes from './routes/index'
import AuthRoute from "./routes/AuthRoute";

interface AppProps { }

const App: React.FunctionComponent<AppProps> = props => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user)
      {
        logging.info('유저 정보 확인')
      }
      else
      {
        logging.info('유저 정보 없음')
      }

      setLoading(false)
    })
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <Switch>
      {routes.map((route, idx) =>
        <Route
          key={idx}
          path={route.path}
          exact={route.exact}
          render={(routeProps: RouteComponentProps<any>) => {
            if (route.protected)
              return <AuthRoute><route.component {...routeProps} /></AuthRoute>

              return  <route.component {...routeProps} />
          }}
        />
      )}
    </Switch>
  )
}

export default App;