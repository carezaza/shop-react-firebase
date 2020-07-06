import React, { useMemo, Suspense, lazy } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductsStart } from "../../redux/products/products.actions";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";

import Spinner from "../../components/spinner/spinner.component";
import { ShopPageContainer, TitleShop } from "./shoppage.styles";

const ShopAll = lazy(() => import('./shop-all.component'));
const ShopType = lazy(() => import('./shop-type.component'));

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
