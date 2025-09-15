import React from 'react'
import { Layout } from '../components'
import {
  Box,
  Button,
  Paper,
  Typography,
  Divider,
  Stack,
} from '@mui/material'
import { useFlowerForm } from '@flowerforce/flower-react-form'
import { FlowerNavigate } from '@flowerforce/flower-react'
import { getSubject } from '@flowerforce/flower-core'

export const Detail = () => {
  const { getData } = useFlowerForm()

  const doc = getData('document')
  const usr = getSubject()

  return (
    <Layout>
      <Box p={4}>
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Stack spacing={2}>
            <Typography variant="h4" component="h1" fontWeight="bold">
              {doc?.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {doc?.description}
            </Typography>
          </Stack>
        </Paper>

        <Paper elevation={1} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Contenuto
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
            {doc?.content}
          </Typography>
        </Paper>

        <Box mt={4}>
          <FlowerNavigate action="back">
            <Button variant="outlined">Torna Indietro</Button>
          </FlowerNavigate>
        </Box>
      </Box>
    </Layout>
  )
}
