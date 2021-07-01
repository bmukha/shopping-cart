import Item from "./Item";
import React, { useContext } from "react";
import { Context } from "./Context";
import { Link, Grid, Container } from "@material-ui/core/";
import { Link as RouterLink } from "react-router-dom";

export default function Shop() {
  const { items } = useContext(Context);
  const itemCarts = items.map((item) => (
    <Grid item key={item.id} xs={12} sm={6} md={3}>
      <Link component={RouterLink} to={`/shop/${item.id}`}>
        <Item
          key={item.id}
          title={item.title}
          url={item.image}
          price={item.price}
          description={item.description}
        />
      </Link>
    </Grid>
  ));
  return (
    <Container>
      <Grid container spacing={3}>
        {itemCarts}
      </Grid>
    </Container>
  );
}
