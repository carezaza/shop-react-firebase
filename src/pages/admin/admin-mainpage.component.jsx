import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const AdminMainPage = ({ currentUser }) => {
  if (currentUser.role !== "admin") return null;
  return <div>Admin</div>;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AdminMainPage);
