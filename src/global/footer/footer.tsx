import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Box bgcolor='text.secondary' color='white'>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Link to="/">
                <Box>Contact</Box>
              </Link>
              <Link to="/">
                <Box>Locate</Box>
              </Link>
              <Link to="/">
                <Box>Support</Box>
              </Link>
              <Link to="/">
                <Box>Privacy</Box>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
