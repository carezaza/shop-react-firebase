import React from "react";
import { connect } from "react-redux";
import ProductsItems from "../../components/products-items/products-items.components";
import { selectTypes } from "../../redux/collections/collections.selectors";
import { selectProduct } from "../../redux/products/products.selectors";
import { ShopPageContainer } from "./shoppage.styles";
import { createStructuredSelector } from "reselect";

const ShopAll = ({ types, products }) => {
  return (
    <React.Fragment>
      {products && products.length > 0 ? (
        types.map((type, index) => <ProductsItems key={index} type={type} />)
      ) : (
        <div style={{ margin: "10px auto", fontSize: 18 }}>No items.</div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  types: selectTypes,
  products: selectProduct,
});

export default connect(mapStateToProps)(ShopAll);
