import React from "react";
import { connect } from "react-redux";
import ProductsItems from "../../components/products-items/products-items.components";
import { selectTypes } from "../../redux/collections/collections.selectors";
import { ShopPageContainer } from "./shoppage.styles";
import { createStructuredSelector } from "reselect";

const ShopAll = ({ types }) => {
  return (
    <>
      {types.map((type, index) => (
        <ProductsItems key={index} type={type} />
      ))}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  types: selectTypes,
});

export default connect(mapStateToProps)(ShopAll);
