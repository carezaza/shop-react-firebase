import React, { useEffect, useState, Fragment } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  NativeSelect,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { fetchUsersStart } from "../../redux/admin/users/users.actions";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectUsers,
  selectIsFetching,
  selectError,
} from "../../redux/admin/users/users.selectors";
import Loading from "../loading/loading.component";
import DialogOkCancel from "../dialog-ok-cancel/dialog-ok-cancel.component";

const UserForAdmin = ({ users, isFetching, error, fetchUsersStart }) => {
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchUsersStart();
  }, []);

  const handleEdit = (user) => {
    setUser(user);
    setEdit(true);
  };

  const handleDelete = (user) => {
    setUser(user);
    setDel(true);
  };

  if (isFetching) return <Loading />;
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5" align="center">
        Users
      </Typography>
      <TableContainer
        component={Paper}
        style={{ margin: "20px", width: "auto" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">DisplayName</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((u) => (
              <TableRow>
                <TableCell align="center">{u.email}</TableCell>
                <TableCell align="center">{u.displayName}</TableCell>
                <TableCell align="center">{u.role}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="secondary"
                    aria-label="edit-role"
                    onClick={() => handleEdit(u)}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="secondary"
                    aria-label="delete"
                    onClick={() => handleDelete(u)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <DialogOkCancel
          open={edit}
          handleCancel={() => setEdit(false)}
          isPending={isFetching}
        >
          <div>
            <h4 style={{ margin: 0 }}>Edit account</h4>
            <form style={{ margin: 20 }}>
              <TextField
                value={user.displayName}
                style={{ marginTop: 10 }}
                label="DisplayName"
                variant="outlined"
              />
              <FormControl
                variant="outlined"
                style={{
                  width: "100%",
                  marginTop: 10,
                  textAlign: "left",
                }}
              >
                <InputLabel id="role-select">Role</InputLabel>
                <Select id="role-select" value={user.role} label="Role">
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </FormControl>
            </form>
          </div>
        </DialogOkCancel>
        <DialogOkCancel
          open={del}
          handleCancel={() => setDel(false)}
          isPending={isFetching}
        >
          <div>
            <h4 style={{ margin: 0 }}>Delete account</h4>
            <p style={{ margin: "10px 0" }}>
              Are you sure to delete this account?
            </p>
          </div>
        </DialogOkCancel>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
  isFetching: selectIsFetching,
  error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsersStart: () => dispatch(fetchUsersStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForAdmin);
