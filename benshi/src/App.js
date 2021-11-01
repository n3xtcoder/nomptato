import React from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Pics from './views/Pics';
import Pic from './views/Pic';
import Upload from './views/Upload';
import { theme } from './style/theme';
import { PicsProvider } from './context/PicsContext';

function App() {
  return (
    <div style={{ backgroundColor: '#FFF3F1' }}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <PicsProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path='/' children={<Home />} />
              <Route exact path='/pics' children={<Pics />} />
              <Route exact path='/pics/:id' children={<Pic />} />
              <Route exact path='/upload' children={<Upload />} />
            </Switch>
          </Router>
        </PicsProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
