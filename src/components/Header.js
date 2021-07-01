import {
  AppBar,
  Grid,
  Toolbar,
  Badge,
  Typography,
  Link,
} from "@material-ui/core";
import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link as RouterLink } from "react-router-dom";
import { Context } from "./Context";

export default function Header() {
  const badgeValue = useContext(Context);
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container direction="row" justify="space-between">
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
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
