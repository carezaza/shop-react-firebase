import React, { Fragment, useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCurrentUser,
  selectIsChecking,
} from "./redux/user/user.selectors";
import { GlobalStyle } from "./global.styles";
import { checkUserSessionStart } from "./redux/user/user.actions";
import { fetchCollectionsStart } from "./redux/collections/collections.actions";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import DrawerCart from "./components/drawer-cart/drawer-cart.component";
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const SignInPage = lazy(() => import("./pages/sign-in/sign-in.component"));
const SignUpPage = lazy(() => import("./pages/sign-up/sign-up.component"));
const ResetPasswordPage = lazy(() =>
  import("./pages/resetpassword/resetpassword.component")
);
const ShopPage = lazy(() => import("./pages/shoppage/shoppage.component"));
const AdminMainPage = lazy(() =>
  import("./pages/admin/admin-mainpage.component")
);

const App = ({
  fetchCollectionsStart,
  checkUserSessionStart,
  currentUser,
  isCheckingSession,
}) => {
  useEffect(() => {
    fetchCollectionsStart();
    // checkUserSessionStart();
  }, [fetchCollectionsStart]);

  return isCheckingSession ? (
    <Spinner />
  ) : (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInPage />
              }
            />
            <Route
              exact
              path="/signup"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignUpPage />
              }
            />
            <Route
              path="/password_reset"
              render={() =>
                currentUser ? <Redirect to="/" /> : <ResetPasswordPage />
              }
            />
            <Route path="/shop" component={ShopPage} />
            <Route path="/admin" component={AdminMainPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCheckingSession: selectIsChecking,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSessionStart: () => dispatch(checkUserSessionStart()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
