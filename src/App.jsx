import "./App.css";
import * as React from "react";
import {
  Container,
  Box,
  Card,
  Grid,
  Divider,
  Typography,
  Button,
  Popover,
  Link,
} from "@mui/material";

import invoice from "./invoice.json";
import InvoiceList from "./components/InvoiceList";

function App() {
  return (
    <div className="App">
      <InvoiceList />
    </div>
  );
}

export default App;
