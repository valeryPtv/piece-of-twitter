import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import 'App.css';
import 'styles/index.sass';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeConfig from 'util/theme';
import AuthRoute from "components/AuthRoute";
import { store, persistor } from 'store';

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
        <PersistGate persistor={persistor} loading={<div>Loading state...</div>}>
          <MuiThemeProvider theme={theme}>
            <div className="App">
              <Router>
                <Navbar />
                <div className="container">
                  <Switch>
                    {/*<AuthRoute path="/" component={Home} isAuthRequired />*/}
                    {/*<AuthRoute path="/signin" component={Auth} />*/}
                    {/*<AuthRoute path="/signup" component={Auth} />*/}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signin" component={Auth} />
                    <Route exact path="/signup" component={Auth} />
                  </Switch>
                </div>
              </Router>
              <h1>Our App</h1>
            </div>
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

// const mapStateToProps = state => ({
//   accessToken: state.user.accessToken
// });

export default App;
