import React, { PropsWithChildren } from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            My App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container sx={{ flex: 1, py: 3 }}>
        {children}
      </Container>
    </Box>
  );
}
