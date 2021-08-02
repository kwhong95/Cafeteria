import { Route } from 'react-router-dom'

type ContextRouteProps = {
  path: string;
  exact?: boolean;
  Provider?: any;
  Component: any;
}

const ConextRoute = ( props: ContextRouteProps ) => {
  const { Provider, Component } = props

  return (
    <Route path={props.path} exact={props.exact}>
      <Provider>
        <Component />
      </Provider>
    </Route>
  )
}

export default ConextRoute