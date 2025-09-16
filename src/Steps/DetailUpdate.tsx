import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Stack,
  Divider,
} from '@mui/material'
import { FlowerField, useFlowerForm } from '@flowerforce/flower-react-form'
import { FlowerNavigate } from '@flowerforce/flower-react'

export const DetailUpdate = () => {
  const { getData } = useFlowerForm()
  const doc = getData('document')

  return (
      <Box p={4}>
        {/* Titolo + descrizione */}
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            {doc?.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {doc?.description}
          </Typography>
        </Paper>

        {/* Campo contenuto */}
        <Paper elevation={1} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Modifica contenuto
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <FlowerField id="document.content">
            {({ value, onChange }) => (
              <TextField
                label="Contenuto"
                placeholder="Inserisci il contenuto..."
                multiline
                minRows={6}
                fullWidth
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          </FlowerField>
        </Paper>

        {/* Pulsanti navigazione */}
        <Stack direction="row" spacing={2}>
          <FlowerNavigate action="back">
            <Button variant="outlined">Torna Indietro</Button>
          </FlowerNavigate>
          <FlowerNavigate action="next">
            <Button variant="contained">Salva</Button>
          </FlowerNavigate>
        </Stack>
      </Box>
  )
}
