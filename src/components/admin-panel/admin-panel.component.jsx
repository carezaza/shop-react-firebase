import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

import WorkIcon from "@material-ui/icons/Work";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton } from "@material-ui/core/";
import { AdminPanelContainer, LinkPanel, IconLink } from "./admin-panel.styles";

const AdminPanel = ({ currentUser, match, signOutStart }) => {
  const [expand, setExpand] = React.useState(true);
  return (
    <AdminPanelContainer expand={expand}>
      <IconButton
        color="secondary"
        style={{ marginLeft: "auto" }}
        onClick={() => setExpand(!expand)}
      >
        {expand ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
      </IconButton>
      {expand && (
        <React.Fragment>
          <LinkPanel to={`${match.path}`}>
            <IconLink>
              <AssignmentIndIcon />
            </IconLink>
            Users
          </LinkPanel>
          <LinkPanel to={`${match.path}/create_product`}>
            <IconLink>
              <AddBoxIcon />
            </IconLink>
            Create Product
          </LinkPanel>
          <LinkPanel to={`${match.path}/products`}>
            <IconLink>
              <WorkIcon />
            </IconLink>
            Products
          </LinkPanel>
          <LinkPanel to={`${match.path}/orders`}>
            <IconLink>
              <ShoppingBasketIcon />
            </IconLink>
            Orders
          </LinkPanel>
          <LinkPanel to="/" onClick={signOutStart}>
            <IconLink>
              <ExitToAppIcon />
            </IconLink>
            Sign Out
          </LinkPanel>
        </React.Fragment>
      )}
    </AdminPanelContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
