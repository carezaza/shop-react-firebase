import React, { Suspense, lazy, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";
import Loading from "../../components/loading/loading.component";
import AccountPanel from "../../components/account-panel/account-panel.component";
import { fetchOrdersStart } from "../../redux/order/order.actions";
import { AccountContainer, Container } from "./account.styles";
const AccountInfo = lazy(() =>
  import("../../components/account-info/account-info.component")
);
const OrderInfo = lazy(() =>
  import("../../components/order-info/order-info.component")
);

const Account = ({ match, fetchOrdersStart }) => {
  const fetchOrder = useCallback(() => {
    fetchOrdersStart();
  }, [fetchOrdersStart]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  return (
    <Container>
      <AccountPanel />
      <AccountContainer>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Route exact path={`${match.path}`} component={AccountInfo} />
              <Route exact path={`${match.path}/order`} component={OrderInfo} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </AccountContainer>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchOrdersStart: () => dispatch(fetchOrdersStart()),
});

export default connect(null, mapDispatchToProps)(Account);
