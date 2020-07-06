import React, { Fragment, Suspense, lazy, useEffect }  from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AdminContainer } from './admin-mainpage.styles'
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";
import { fetchOrdersStart } from "../../redux/order/order.actions";
import Spinner from "../../components/spinner/spinner.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import AdminPanel from "../../components/admin-panel/admin-panel.component";
import UserForAdmin from '../../components/users-for-admin/user-for-admin.component'
import ProductsForAdmin from '../../components/products-for-admin/products-for-admin.component'
import OrderForAdmin from '../../components/orders-for-admin/orders-for-admin.components'


const AdminMainPage = ({ currentUser, match, fetchOrdersStart }) => {
  useEffect(() => {
    fetchOrdersStart();
  }, []);
  if (currentUser.role !== "admin") return null;
  return (
    <Fragment>
      <AdminPanel match={match} />
      <AdminContainer>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path={`${match.path}`} component={UserForAdmin} />
              <Route exact path={`${match.path}/products`} component={ProductsForAdmin} />
              <Route exact path={`${match.path}/orders`} component={OrderForAdmin} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </AdminContainer>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});


const mapDispatchToProps = (dispatch) => ({
  fetchOrdersStart: () => dispatch(fetchOrdersStart()),
});

export default connect(mapStateToProps,mapDispatchToProps)(AdminMainPage);
