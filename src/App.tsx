import React from "react";
import logo from "./logo.svg";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";
import { Header } from "./components/Header";
import { SearchCard } from "./components/SearchCard";

function App() {
  return (
    <div className="background">
      <Header title="NA E-commerce" />
      <SearchCard />
    </div>
  );
}

export default App;
