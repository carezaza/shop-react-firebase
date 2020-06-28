import React, { useState } from "react";
import { connect } from "react-redux";

import imgPlaceholder from "../../../assets/placeholderIMG.png";
import {
  AddProductContainer,
  Title,
  PreviewImage,
  InputFile,
  FormProduct,
} from "./add-product.styles";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/button.component";
import SelectInput from "../../components/select-input/select-input.component";
import ErrorCard from "../../components/error-card/error-card.component";

const AddProduct = ({ currentUser }) => {
  const types = ["hats", "shirts", "jackets", "pants", "sneakers"];
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    type: "hats",
    image: null,
  });
  const [error , setError] = useState(null);
  const { name, price, type, image } = product;

  const setFile = (file) => {
    try {
      const typesAccepted = ['.jpg' , '.png'];
      if(!typesAccepted.find(t => t === file.name.slice(file.name.length-4))) {
        setError("file type should be .jpg and .png")
        return;
      }
  
      const sizeToMb = file.size * Math.pow(10,-6);
      if(sizeToMb > 2){
        setError("file size must be less than 2mb!");
        return;
      }

      setProduct((state) => ({ ...state, image: file}));
      setError(null);
      return ;
    }catch (error) {
      
    }
  }
  
  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if(name === 'image') {
      setFile(files[0]);
      return ; 
    }
    setProduct((state) => ({ ...state, [name]: value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <AddProductContainer>
      <Title>Add Product</Title>
      <ErrorCard message={error} onClick={() => setError(null)}/>
      <FormProduct onSubmit={handleSubmit}>
        <FormInput
          name="name"
          type="text"
          label="name"
          value={name}
          onChange={handleChange}
          required
        />
        <FormInput
          name="price"
          type="number"
          label="price"
          value={price}
          onChange={handleChange}
          required
        />
        <SelectInput
          label="type"
          name="type"
          values={types}
          defaultValue={type}
          onChange={handleChange}
        />
        <PreviewImage
          src={image ? URL.createObjectURL(image) : imgPlaceholder}
        />
        <InputFile
          id="file"
          type="file"
          name="image"
          placeholder="Upload File"
          onChange={handleChange}
        />
        <label htmlFor="file">Upload Image</label>
        <CustomButton type="submit" bgColor="#20232a" textColor="#fff" >
          Confirm
        </CustomButton>
      </FormProduct>
    </AddProductContainer>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(AddProduct);
