import React, { useState } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import {
  FormEditAddress,
  FormContainer,
  InputContainer,
} from "./edit-address-form.styles";

import { TextField, Typography, Button } from "@material-ui/core/";
import { editAddressStart } from "../../redux/user/user.actions";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { searchAddressByZipcode } from "thai-address-database";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import CloseIcon from "@material-ui/icons/Close";

const EditAddressForm = ({
  open,
  handleClose,
  addressItem,
  addressIndex,
  isPending,
  currentUser,
  editAddressStart,
}) => {
  const [address, setAddress] = useState({
    name: addressItem.name,
    phone: addressItem.phone,
    province: addressItem.province,
    zipcode: addressItem.zipcode,
    district: addressItem.district,
    amphoe: addressItem.amphoe,
    houseNo: addressItem.houseNo,
    villageNo: addressItem.villageNo,
  });

  const {
    name,
    phone,
    province,
    zipcode,
    district,
    amphoe,
    houseNo,
    villageNo,
  } = address;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress((state) => ({ ...state, [name]: value }));
    if (name === "district") {
      setAddress((state) => ({
        ...state,
        province: searchAddressByZipcode(zipcode).find(
          (item) => item.district === value
        ).province,
        amphoe: searchAddressByZipcode(zipcode).find(
          (item) => item.district === value
        ).amphoe,
      }));
    }
    if ((name === "zipcode" && value.length > 5) || value.length < 5) {
      setAddress((state) => ({
        ...state,
        province: "",
        amphoe: "",
        district: "",
      }));
    }
  };

  const handleSubmit = () => {
    if (_.isEqual(address, addressItem)) {
      handleClose();
      return;
    }
    if (
      !name ||
      !phone ||
      !province ||
      !district ||
      !zipcode ||
      !amphoe ||
      !houseNo ||
      !villageNo
    ) {
      alert("Please fill out all information!");
      return;
    }
    editAddressStart({ addressIndex, address, currentUser });
  };

  if (!open) return null;
  return (
    <FormContainer>
      <FormEditAddress>
        <IconButton
          aria-label="close"
          style={{ marginLeft: "auto" }}
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        <Typography variant="h5" align="center">
          Edit Address
        </Typography>
        {isPending ? (
          <div style={{ margin: "30px auto" }}>
            <CircularProgress />
          </div>
        ) : (
          <InputContainer>
            <TextField
              label="name"
              name="name"
              style={{ margin: 10 }}
              defaultValue={name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Phone number"
              name="phone"
              style={{ margin: 10 }}
              defaultValue={phone}
              onChange={handleChange}
              required
            />
            <TextField
              label="House No."
              name="houseNo"
              style={{ margin: 10 }}
              defaultValue={houseNo}
              onChange={handleChange}
              required
            />
            <TextField
              label="Village No."
              name="villageNo"
              type="number"
              style={{ margin: 10 }}
              defaultValue={villageNo}
              onChange={handleChange}
              required
            />
            <TextField
              label="Zipcode"
              name="zipcode"
              type="number"
              minLength="5"
              maxLength="5"
              style={{ margin: 10 }}
              defaultValue={zipcode}
              onChange={handleChange}
              required
            />
            <FormControl style={{ margin: 10 }}>
              <InputLabel id="district">District</InputLabel>
              <Select
                labelId="district-label"
                id="district"
                name="district"
                value={district}
                onChange={handleChange}
                disabled={zipcode.length === 5 ? false : true}
                required
              >
                {zipcode.length === 5
                  ? searchAddressByZipcode(zipcode).map((item, index) => (
                      <MenuItem key={index} value={item.district}>
                        {item.district}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </FormControl>
            <TextField
              label="Province (auto complete)"
              name="province"
              style={{ margin: 10 }}
              value={province}
              required
              disabled
            />
            <TextField
              label="Amphoe (auto complete)"
              name="amphoe"
              style={{ margin: 10 }}
              value={amphoe}
              required
              disabled
            />
          </InputContainer>
        )}

        <div style={{ margin: 10 }}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            style={{ width: "100%" }}
            disabled={isPending}
          >
            Submit Edit
          </Button>
        </div>
      </FormEditAddress>
    </FormContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editAddressStart: (indexAndAddressAndUser) =>
    dispatch(editAddressStart(indexAndAddressAndUser)),
});

export default connect(null, mapDispatchToProps)(EditAddressForm);
