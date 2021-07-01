import Item from "./Item";
import React, { useContext } from "react";
import { Context } from "./Context";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export default function Shop() {
  const {items} = useContext(Context);
  const itemCarts = items.map((item) => (
    <Grid item key={item.id} xs={12} sm={6} md={3}>
      <Item
        key={item.id}
        title={item.title}
        url={item.image}
        price={item.price}
        description={item.description}
      />
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
