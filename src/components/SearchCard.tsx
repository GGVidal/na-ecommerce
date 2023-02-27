import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import {
  Container,
  Input,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import Search from "@mui/icons-material/Search";

export const SearchCard = () => {
  return (
    <div
      style={{
        marginLeft: 130,
        marginTop: 34,
        marginRight: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginLeft: 165, marginBottom: 30, marginTop: 64 }}>
          <Typography variant="h4">Pesquise os produtos</Typography>
        </div>
        <div style={{ marginLeft: 165, marginTop: 31, marginBottom: 80 }}>
          <InputLabel htmlFor="filled-adornment-password">Pesquisar</InputLabel>
          <Input
            sx={{ width: 300 }}
            id="filled-adornment-password"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => console.log("click")}
                  edge="end"
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </div>
      <div>
        <img src={require("../assets/3.png")} />
      </div>
    </div>
  );
};
