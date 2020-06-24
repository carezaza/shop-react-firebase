import React , {Fragment} from "react";
import { Switch, Route } from 'react-router-dom';

//import components
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignIn from './pages/sign-in/sign-in.component';
import SignUp from './pages/sign-up/sign-up.component';
import Footer from './components/footer/footer.component';

//import styles
import { GlobalStyle } from "./global.styles";

import { notAllowRender } from './utils/render'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      {notAllowRender() ? null : <Header />}
      <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
      </Switch>
      {notAllowRender() ? null : <Footer />}
    </Fragment>
  );
}

export default App;
