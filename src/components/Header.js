import { AppBar, Toolbar } from "@material-ui/core";
import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

// import { Context } from "./Context";

export default function Header() {
  // const badgeValue = useContext(Context);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link component={RouterLink} to="/">
          <Typography variant="h5" component="h2" color="textPrimary">
            Home
          </Typography>
        </Link>
        <Link component={RouterLink} to="/shop">
          <Typography variant="h5" component="h2" color="textPrimary">
            Shop
          </Typography>
        </Link>
        <Badge color="secondary" edge="end">
          <ShoppingCartOutlinedIcon fontSize={"large"} />
        </Badge>
      </Toolbar>
    </AppBar>
  );
}
