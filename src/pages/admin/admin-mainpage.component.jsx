import React, { Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { AdminContainer , Container} from "./admin-mainpage.styles";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";
import { fetchOrdersStart } from "../../redux/order/order.actions";
import Spinner from "../../components/spinner/spinner.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import AdminPanel from "../../components/admin-panel/admin-panel.component";
import UserForAdmin from "../../components/users-for-admin/user-for-admin.component";
import ProductsForAdmin from "../../components/products-for-admin/products-for-admin.component";
import OrderForAdmin from "../../components/orders-for-admin/orders-for-admin.components";
import CreateProduct from "../create-product/create-product.component";

const AdminMainPage = ({ currentUser, match, fetchOrdersStart }) => {
  useEffect(() => {
    fetchOrdersStart();
  }, [fetchOrdersStart]);
  if (currentUser.role !== "admin") return null;
  return (
    <Container>
      <AdminPanel match={match} />
      <AdminContainer>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path={`${match.path}`} component={UserForAdmin} />
              <Route
                exact
                path={`${match.path}/products`}
                component={ProductsForAdmin}
              />
              <Route
                exact
                path={`${match.path}/orders`}
                component={OrderForAdmin}
              />
              <Route
                path={`${match.path}/create_product`}
                component={CreateProduct}
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </AdminContainer>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrdersStart: () => dispatch(fetchOrdersStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminMainPage);
