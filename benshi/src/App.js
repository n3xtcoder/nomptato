import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Pics from './views/Pics';
function App() {
  return (
    <div>
      <CssBaseline />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' children={<Home />} />
          <Route exact path='/pics' children={<Pics />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
