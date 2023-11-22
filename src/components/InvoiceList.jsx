import invoice from "../invoice.json";
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
import InvoiceItem from "./InvoiceItem";

function InvoiceList() {
  const invoices = invoice.invoices;
  console.log(invoices);

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          width: 1200,
        }}
      ></Container>
      {invoices.map((data) => (
        <InvoiceItem data={data} key={data.id}/>
      ))}
    </>
  );
}

export default InvoiceList;
