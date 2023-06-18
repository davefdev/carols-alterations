import { AppBar, Toolbar, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";

function AppNavbar() {
  return (
    <AppBar position="absolute" sx={{backgroundColor:"transparent"}}>
      <Container>
        <Toolbar sx={{backgroundColor:"transparent"}}>
          <Image height={75} width={75} src="/carols_logo.jpg"></Image>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carol's Alterations
          </Typography>
          <Button>About</Button>
          <Button>Contact</Button>
          <Button>Gallery</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppNavbar;
