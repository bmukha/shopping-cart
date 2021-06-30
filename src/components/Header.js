import { AppBar, Toolbar } from "@material-ui/core";
import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
// import { Context } from "./Context";

export default function Header() {
  // const badgeValue = useContext(Context);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Badge color="secondary">
          <ShoppingCartOutlinedIcon fontSize={"large"} />
        </Badge>
      </Toolbar>
    </AppBar>
  );
}
