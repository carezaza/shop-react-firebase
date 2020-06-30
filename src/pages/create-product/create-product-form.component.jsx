import React from "react";
import {
  TextField,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { FormCreateProduct } from "./create-product.styles";

const CreateProductForm = ({ product, handleChange }) => {
  const { name, image, price, discount, types, type } = product;

  return (
    <FormCreateProduct>
      <div style={{ textAlign: "center" }}>
        <img
          alt=""
          src={image ? URL.createObjectURL(image) : null}
          width="200"
          height="200"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="icon-button-file"
          type="file"
          name="image"
          onChange={handleChange}
          required
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
      <TextField
        label="Name"
        name="name"
        defaultValue={name}
        onChange={handleChange}
        style={{ margin: "10px 0" }}
        required
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        defaultValue={price}
        onChange={handleChange}
        style={{ margin: "10px 0" }}
        required
      />
      <TextField
        label="Discount (Percent)"
        name="discount"
        type="number"
        defaultValue={discount}
        onChange={handleChange}
        style={{ margin: "10px 0" }}
        required
      />
      <FormControl style={{ margin: "10px 0" }}>
        <InputLabel id="type">Select type...</InputLabel>
        <Select
          labelId="type"
          name="type"
          value={type}
          onChange={handleChange}
          required
        >
          {types.map((type, index) => (
            <MenuItem key={index} value={type}>
              {type.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FormCreateProduct>
  );
};

export default CreateProductForm;
