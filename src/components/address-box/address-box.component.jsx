import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectIsPending,
} from "../../redux/user/user.selectors";
import { deleteAddressStart } from "../../redux/user/user.actions";

import {
  AddressContainer,
  IconBox,
  HeaderAddress,
  RadioGroupContainer,
} from "./address-box.styles";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";

import AddAddressForm from "../add-address-form/add-address-form.component";
import DialogOkCancel from "../dialog-ok-cancel/dialog-ok-cancel.component";
import EditAddressForm from "../edit-address-form/edit-address-form.component";

const AddressBox = ({
  currentUser,
  value,
  handleChange,
  deleteAddressStart,
  isPending,
}) => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const { address } = currentUser;

  useEffect(() => {
    setOpenAdd(false);
    setOpenDel(false);
    setOpenEdit(false);
  }, [address]);

  return (
    <Fragment>
      <FormControl component="fieldset">
        <RadioGroupContainer
          aria-label="address"
          name="address"
          value={value}
          onChange={handleChange}
        >
          {address.length > 0
            ? address.map((item, index) => (
                <AddressContainer key={index}>
                  <HeaderAddress>
                    <FormControlLabel
                      value={`${index}`}
                      control={<Radio />}
                      label={`ผู้รับ: ${item.name}`}
                    />
                    <div>
                      <IconBox
                        color="primary"
                        aria-label="add to shopping cart"
                        onClick={() => setOpenEdit(true)}
                      >
                        <CreateIcon />
                      </IconBox>
                      <EditAddressForm
                        open={openEdit}
                        handleClose={() => setOpenEdit(false)}
                        addressItem={item}
                        isPending={isPending}
                        addressIndex={index}
                        currentUser={currentUser}
                      />
                      <IconBox
                        color="primary"
                        aria-label="add to shopping cart"
                        onClick={() => setOpenDel(true)}
                      >
                        <DeleteIcon />
                      </IconBox>
                      <DialogOkCancel
                        open={openDel}
                        handleCancel={() => setOpenDel(false)}
                        isPending={isPending}
                        handleOk={() =>
                          deleteAddressStart({ index, currentUser })
                        }
                      >
                        <div>
                          <h4 style={{ margin: 0 }}>Delete Address</h4>
                          <p style={{ margin: "10px 0" }}>
                            Are you sure to delete this address?
                          </p>
                        </div>
                      </DialogOkCancel>
                    </div>
                  </HeaderAddress>
                  <p>
                    บ้านเลขที่ {item.houseNo} หมู่ {item.villageNo}
                  </p>
                  <p>
                    ตำบล {item.district} อำเภอ {item.amphoe} จังหวัด
                    {item.province}
                  </p>
                  <p>รหัสไปรษณีย์ {item.zipcode}</p>
                  <p>เบอร์โทร {item.phone}</p>
                </AddressContainer>
              ))
            : null}

          <IconButton
            color="primary"
            type="button"
            aria-label="add to shopping cart"
            onClick={() => setOpenAdd(true)}
            style={{ borderRadius: 0, margin: 10, padding: 10 }}
          >
            <AddIcon />
          </IconButton>
          <AddAddressForm
            isPending={isPending}
            currentUser={currentUser}
            open={openAdd}
            handleClose={() => setOpenAdd(false)}
          />
        </RadioGroupContainer>
      </FormControl>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isPending: selectIsPending,
});

const mapDispatchToProps = (dispatch) => ({
  deleteAddressStart: (index) => dispatch(deleteAddressStart(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressBox);
