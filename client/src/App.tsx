import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'

/* pages  */
import Home from './pages/Home'
import Gallery from './pages/Gallery'


function App () {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route exact path='/gallery' component={Gallery} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
