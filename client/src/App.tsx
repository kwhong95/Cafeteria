import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import CustomApolloProvider from "./graphql";

/* pages  */
import Home from './pages/Home'
import Gallery from './pages/Gallery'


function App () {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <CustomApolloProvider>
          <Route path='/' exact component={Home}/>
          <Route exact path='/gallery' component={Gallery} />
        </CustomApolloProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
