import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Person from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import Add from "@mui/icons-material/Add";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          gap: 3,
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <Button variant="outlined" size="small" startIcon={<Person />}>
          Login
        </Button>
        <Button variant="outlined" size="small" startIcon={<Add />}>
          Sell
        </Button>
      </Toolbar>
    </React.Fragment>
  );
};
