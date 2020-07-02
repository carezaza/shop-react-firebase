import React, { useMemo, Suspense, Fragment } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductsStart } from "../../redux/products/products.actions";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";

import Spinner from "../../components/spinner/spinner.component";
import ShopAll from "./shop-all.component";
import ShopType from "./shop-type.component";
import { ShopPageContainer, TitleShop } from "./shoppage.styles";

const ShopPage = ({ fetchProductsStart }) => {
  useMemo(() => {
    fetchProductsStart();
  }, [fetchProductsStart]);
  let match = useRouteMatch();

  return (
    <ShopPageContainer>
      <TitleShop to={`${match.path}`}>SHOP</TitleShop>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path={`${match.path}`} component={ShopAll} />
            <Route path={`${match.path}/:typeId`} component={ShopType} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </ShopPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchProductsStart: () => dispatch(fetchProductsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
