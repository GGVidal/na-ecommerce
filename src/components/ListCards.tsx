import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardItem } from "./CardItem/CardItem";
import { Grid } from "@mui/material";
import { cards } from "../config/statues";

export const ListCards = () => {
  return (
    <div style={{ marginLeft: 90, marginRight: 90, marginTop: 100 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cards.map((card) => (
          <Grid item xs={2}>
            <CardItem {...card} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
