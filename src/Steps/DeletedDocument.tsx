import React from 'react'
import { Box, Button, Container, Typography, Paper } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { FlowerNavigate, useFlower } from '@flowerforce/flower-react'

export const DeletedPage = () => {
  const { jump } = useFlower()
  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          mt: 10,
          p: 6,
          textAlign: 'center',
          borderRadius: 3
        }}
      >
        <DeleteOutlineIcon color="error" sx={{ fontSize: 60, mb: 2 }} />

        <Typography variant="h5" gutterBottom>
          Documento eliminato con successo
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          L’elemento è stato rimosso dal sistema.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="contained" color="primary" onClick={() => jump('fetch-documents')} >
              Torna indietro
            </Button>
        </Box>
      </Paper>
    </Container>
  )
}
