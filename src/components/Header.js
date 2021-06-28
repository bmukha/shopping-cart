import { AppBar, Toolbar  } from "@material-ui/core"
import React from "react"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';


export default function Header() {
    return (
        <AppBar position="sticky">
            <Toolbar>
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon fontSize={"large"}/>
            </Badge>
            </Toolbar>
        </AppBar>
        
    )
};
