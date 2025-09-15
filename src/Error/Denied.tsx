import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { FlowerNavigate } from '@flowerforce/flower-react'

export const OperationDeniedPage = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
      <Box>
        <ErrorOutlineIcon color="error" sx={{ fontSize: 80 }} />
        <Typography variant="h3" color="error" gutterBottom>
          Operation Denied
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          You do not have permission to perform this action.
        </Typography>
        <FlowerNavigate action="back">
          <Button variant="contained" color="primary">
            Go Back
          </Button>
        </FlowerNavigate>
      </Box>
    </Container>
  )
}
