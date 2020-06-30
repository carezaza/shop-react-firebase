import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsPending } from "../../redux/products/products.selectors";

import { ImageUpload, FormCreateProduct } from "./create-product.styles";
import {
  TextReviewTitle,
  TextReviewValue,
} from "./create-product.styles";

const CreateProductReview = ({ product, isPending }) => {
  const { name, image, price, discount, type } = product;

  return (
    <FormCreateProduct>
      <ImageUpload src={image ? URL.createObjectURL(image) : null} />
      <div style={{ margin: "20px 0", textAlign: "center" }}>
        <TextReviewTitle>Name</TextReviewTitle>
        <TextReviewValue>{name}</TextReviewValue>
        <TextReviewTitle>Price</TextReviewTitle>
        <TextReviewValue>{price} Bath</TextReviewValue>
        <TextReviewTitle>Discount</TextReviewTitle>
        <TextReviewValue>{discount} Percent</TextReviewValue>
        <TextReviewTitle>Type</TextReviewTitle>
        <TextReviewValue>{type.toUpperCase()}</TextReviewValue>
      </div>
    </FormCreateProduct>
  );
};

const mapStateToProps = createStructuredSelector({
  isPending: selectIsPending,
});

export default connect(mapStateToProps)(CreateProductReview);
