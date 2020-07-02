import React from "react";
import { connect } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectTypes } from "../../redux/collections/collections.selectors";
import ProductsItems from "../../components/products-items/products-items.components";
import { ShopPageContainer } from "./shoppage.styles";

const ShopType = ({ types }) => {
  let { typeId } = useParams();

  return types.find((type) => type === typeId.toLowerCase()) ? (
    <>
      <ProductsItems type={typeId} />
    </>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = createStructuredSelector({
  types: selectTypes,
});

export default connect(mapStateToProps)(ShopType);
