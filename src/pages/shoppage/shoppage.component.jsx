import React, { Fragment } from "react";

import { ShopPageContainer } from "./shoppage.styles";
import ProductsItems from '../../components/products-items/products-items.components'

const ShopPage = () => {
  return (
    <Fragment>
      <ShopPageContainer>
        <h2>SHOP</h2>
        <ProductsItems />
      </ShopPageContainer>
    </Fragment>
  );
};

export default ShopPage;
