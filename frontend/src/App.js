import React, { Component } from 'react';
import {
  BrowserRouter, Switch
} from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'styles/index.sass';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeConfig from 'util/theme';
import AuthRoute from 'components/HOC/AuthRoute';
import { store, persistor } from 'store';
import { getUserAction } from 'store/user/userActions';
import ProvidedStore from 'components/HOC/ProvidedStore';

// Pages
import Home from 'views/Home';
import Auth from 'views/Auth';
// Components
import Navbar from 'components/Navbar';

const theme = createMuiTheme(themeConfig);

// store.dispatch(getUserAction());

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>Loading state...</div>}>
          <ProvidedStore>
            <MuiThemeProvider theme={theme}>
              <div className="App">
                <BrowserRouter>
                  <Navbar />
                  <div className="container">
                    <Switch>
                      <AuthRoute exact path="/" component={Home} isAuthRequired />
                      {/* <AuthRoute exact path="/signin" component={Auth} /> */}
                      <AuthRoute exact path="/signup" component={Auth} />
                      <AuthRoute exact path="/signin" component={Auth} />
                      {/* <Route exact path="/" component={Home} /> */}
                      {/* <Route exact path="/signup" component={Auth} /> */}
                    </Switch>
                  </div>
                </BrowserRouter>
                <h1>Our App</h1>
              </div>
            </MuiThemeProvider>
          </ProvidedStore>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
