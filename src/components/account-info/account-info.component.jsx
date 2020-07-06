import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeStyles } from "@material-ui/core/styles";
import {
  AccountInfoContainer,
  GroupContainer,
  HeaderAddress,
  AddressContainer,
  IconBox,
  InfoContainer,
} from "./account-info.styles";
import { deleteAddressStart } from "../../redux/user/user.actions";
import {
  selectCurrentUser,
  selectIsPending,
} from "../../redux/user/user.selectors";
import {
  Typography,
  ListItemIcon,
  List,
  ListItem,
  ListItemText,
  IconButton,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import StarIcon from "@material-ui/icons/Star";
import AddAddressForm from "../add-address-form/add-address-form.component";
import DialogOkCancel from "../dialog-ok-cancel/dialog-ok-cancel.component";
import EditAddressForm from "../edit-address-form/edit-address-form.component";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    borderRadius: theme.spacing(0.3),
    backgroundColor: theme.palette.background.paper,
    margin: 10,
  },
}));

const AccountInfo = ({ currentUser, isPending, deleteAddressStart }) => {
  const { email, displayName, address } = currentUser;
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  useEffect(() => {
    setOpenAdd(false);
    setOpenDel(false);
    setOpenEdit(false);
  }, [address]);

  return (
    <AccountInfoContainer>
      <InfoContainer>
        <Typography variant="h6" style={{ margin: "0 10px" }}>
          Account
        </Typography>
        <List className={classes.root} aria-label="account">
          <ListItem>
            <ListItemText align="center" secondary="Email" />
          </ListItem>
          <ListItem>
            <ListItemText align="center" primary={email} />
          </ListItem>
          <ListItem>
            <ListItemText align="center" secondary="DisplayName" />
          </ListItem>
          <ListItem>
            <ListItemText align="center" primary={displayName} />
          </ListItem>
        </List>
        <Typography variant="h6" style={{ margin: "0 10px" }}>
          Address
        </Typography>
        <FormControl component="fieldset">
          <GroupContainer>
            {address.length > 0
              ? address.map((item, index) => (
                  <AddressContainer key={index}>
                    <HeaderAddress>
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
                    <Typography>{`ผู้รับ: ${item.name}`}</Typography>
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
          </GroupContainer>
        </FormControl>
      </InfoContainer>
    </AccountInfoContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isPending: selectIsPending,
});

const mapDispatchToProps = (dispatch) => ({
  deleteAddressStart: (index) => dispatch(deleteAddressStart(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
