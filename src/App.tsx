import React from "react";
import logo from "./logo.svg";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";
import { Header } from "./components/Header";
import { SearchCard } from "./components/SearchCard";
import { CardItem } from "./components/CardItem/CardItem";
import { ListCards } from "./components/ListCards";

function App() {
  return (
    <div className="background">
      <Header title="NA E-commerce" />
      <SearchCard />
      <ListCards />
    </div>
  );
}

export default App;
