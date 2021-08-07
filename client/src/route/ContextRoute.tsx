import { Route } from 'react-router-dom'

type ContextRouteProps = {
  path: string;
  exact?: boolean;
  Provider?: any;
  Component: any;
}

const ContextRoute = ( props: ContextRouteProps ) => {
  const { Provider, Component } = props

  return (
    <Route path={props.path} exact={props.exact}>
      <Provider>
        <Component />
      </Provider>
    </Route>
  )
}

export default ContextRoute