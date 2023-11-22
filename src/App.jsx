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

function App() {
  const invoices = invoice.invoices;
  console.log(invoices);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="App">
      <Container
        maxWidth="md"
        sx={{
          width: 1200,
        }}
      ></Container>
      {invoices.map((data) => (
        <Card
          key={data.id}
          sx={{
            margin: 4,
          }}
        >
          <Grid container bgcolor="grey.400" xs={12} md={12}>
            <Grid item md={3} p={1} align="left">
              <Typography variant="subtitle2">ORDER PLACED</Typography>
              <Typography variant="p">{data.created_at}</Typography>
            </Grid>
            <Grid item md={2} p={1} align="left">
              <Typography variant="subtitle2">TOTAL</Typography>
              <Typography variant="p">${data.total_price}</Typography>
            </Grid>
            <Grid item md={4} p={1} align="left">
              <Typography variant="subtitle2">SHIP TO</Typography>
              <Link
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                underline="none"
              >
                {data.full_name} ▾
              </Link>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  {data.address1}
                </Typography>
              </Popover>
            </Grid>
            <Grid item xs align="right" p={1}>
              <Box>
                <Typography variant="subtitle2">ORDER # {data.id}</Typography>
                <Link variant="p" underline="hover" color="inherit">
                  View order detail
                </Link>
              </Box>
            </Grid>
          </Grid>
          {data.items.map((item) => (
            <>
              <Grid container xs={10} md={12}>
                <Grid item container xs={3} p={2} direction="column">
                  <img src={item.image_url} width={150} />
                </Grid>
                <Grid
                  item
                  container
                  xs={5}
                  textAlign="left"
                  direction="column"
                  justify="center"
                >
                  <Typography variant="h5" my={3}>
                    {item.product_name}
                  </Typography>
                  <Typography variant="subtitle1">
                    Quantity: {item.quantity}
                  </Typography>
                  <Typography variant="subtitle1">
                    Total: ${item.price}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  xs
                  direction="row"
                  alignItems="flex-end"
                  justify="flex-end"
                  p={1}
                >
                  <Box>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        alert("clicked");
                      }}
                    >
                      Write a product review
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Divider />
            </>
          ))}
        </Card>
      ))}
    </div>
  );
}

export default App;
