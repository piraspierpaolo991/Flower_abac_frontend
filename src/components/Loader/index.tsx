// components/Loader.tsx
import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface LoaderProps {
  text?: string;
  size?: number;
}

export const Loader = ({ text = "Loading...", size = 40 }: LoaderProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <CircularProgress size={size} />
      <Typography variant="body1" mt={2}>
        {text}
      </Typography>
    </Box>
  );
};
