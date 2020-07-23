import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTypes } from "../../redux/collections/collections.selectors";
import { Link } from "react-router-dom";
import {
  selectError,
  selectIsPending,
  selectSuccess,
} from "../../redux/products/products.selectors";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "../../redux/products/products.actions";
import ErrorCard from "../../components/error-card/error-card.component";
import CreateProductForm from "./create-product-form.component";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  CircularProgress,
} from "@material-ui/core/";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Container, TextUpLoading } from "./create-product.styles";
import CreateProductReview from "./create-product-review.component";

function getSteps() {
  return ["Creating", "Review", "Success"];
}

const CreateProduct = ({
  types,
  error,
  addProductFailure,
  addProductStart,
  successMsg,
  isPending,
  addProductSuccess,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    discount: 0,
    type: "",
    image: null,
    types: types,
  });
  const { name, type, image } = product;
  const handleNext = () => {
    if (activeStep === 0) {
      if (!name || !type || !image) {
        addProductFailure("Please fill out all information of your product!");
      } else {
        addProductFailure(null);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleAccept = () => {
    addProductStart(product);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setProduct((state) => ({
      ...state,
      name: "",
      price: 0,
      discount: 0,
      type: "",
      image: null,
    }));
    addProductSuccess(null);
    setActiveStep(0);
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "image") {
      setImgFile(files[0]);
      return;
    }
    setProduct((state) => ({ ...state, [name]: value }));
  };

  const setImgFile = (file) => {
    try {
      const typeAccepts = [".jpg", ".png" , "jpeg"];
      const FileType = file.name.slice(file.name.length - 4);
      if (typeAccepts.find((type) => type === FileType)) {
        const size = file.size * Math.pow(10, -6);
        if (size < 5) {
          setProduct((state) => ({ ...state, image: file }));
        } else {
          addProductFailure("The image file size must be less than 5 mb!");
        }
      } else {
        addProductFailure("The image file type should be only .jpg and .png!");
      }
    } catch (error) {}
  };

  const getStepContent = (stepIndex, { product, handleChange }) => {
    if (successMsg) setActiveStep(3);
    switch (stepIndex) {
      case 0:
        return (
          <CreateProductForm product={product} handleChange={handleChange} />
        );
      case 1:
        return <CreateProductReview product={product} />;
      case 2:
        return null;
      default:
        return "Unknown stepIndex";
    }
  };

  const getButtonStep = (step) => {
    switch (step) {
      case 0:
        return (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Confirm
          </Button>
        );
      case 1:
        return (
          <Button variant="contained" color="primary" onClick={handleAccept}>
            Accept
          </Button>
        );
      default:
        break;
    }
  };

  return (
    <div style={{ padding: "20px 0" }}>
      <Container>
        <h3 style={{ textAlign: "center" }}>Create Product</h3>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          <ErrorCard message={error} callback={() => addProductFailure(null)} />
          {activeStep === steps.length ? (
            <div>
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert —{" "}
                <strong>Uploaded successfully!</strong>
              </Alert>
              <div style={{ margin: "20px 0" }}>
                <Button onClick={handleReset}>Add more?</Button>
                <Link to="/">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addProductSuccess(null)}
                  >
                    Go home
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div>
                {isPending ? (
                  <div style={{ textAlign: "center", margin: "50 px" }}>
                    <CircularProgress />
                    <TextUpLoading>Uploading...</TextUpLoading>
                  </div>
                ) : (
                  getStepContent(activeStep, {
                    product,
                    handleChange,
                  })
                )}
              </div>
              {!isPending && (
                <div style={{ padding: "20px 10px" }}>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  {getButtonStep(activeStep)}
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  types: selectTypes,
  error: selectError,
  isPending: selectIsPending,
  successMsg: selectSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  addProductFailure: (error) => dispatch(addProductFailure(error)),
  addProductStart: (product) => dispatch(addProductStart(product)),
  addProductSuccess: (success) => dispatch(addProductSuccess(success)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
