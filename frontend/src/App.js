import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
// import 'App.css';
import 'styles/index.sass';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeConfig from 'util/theme';
import store from 'store';

// Pages
import Home from 'views/Home';
// import Login from 'views/Login';
import Auth from 'views/Auth';
// Components
import Navbar from 'components/Navbar';

const theme = createMuiTheme(themeConfig);

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Router>
              <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/signin" component={Auth} />
                  <Route exact path="/signup" component={Auth} />
                </Switch>
              </div>
            </Router>
            <h1>Our App</h1>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
