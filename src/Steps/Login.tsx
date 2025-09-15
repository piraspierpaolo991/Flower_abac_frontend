import { setSubject } from '@flowerforce/flower-core'
import { FlowerNavigate } from '@flowerforce/flower-react'
import { FlowerField, useFlowerForm } from '@flowerforce/flower-react-form'
import {
  Box,
  Stack,
  Typography,
  Select,
  MenuItem,
  Button,
  useTheme
} from '@mui/material'
import React from 'react'

export const Login = () => {
  const theme = useTheme()
  const { getData } = useFlowerForm()
  return (
    <Box
      boxShadow={theme.shadows[10]}
      borderRadius={4}
      position="absolute"
      top="25%"
      bottom="25%"
      left="20%"
      right="20%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={4}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="baseline"
        gap={3}
      >
        <img
          src="https://flowerjs.it/_next/static/media/flower-logo.bb32f863.svg"
          alt="Library logo"
          style={{ width: '35px' }}
        />
        <h1>Welcome to Flower ABAC Tester</h1>
      </Stack>

      <Typography>Please select a role to procede</Typography>

      <FlowerField
        id="role"
        validate={[
          {
            rules: {
              $and: [{ $self: { $exists: true } }]
            },
            message: 'Field is required'
          },
          {
            rules: {
              $and: [
                {
                  can: {
                    $can: { action: 'login' }
                  }
                }
              ]
            },
            message: 'Users cannot login after 15:20'
          }
        ]}
      >
        {({ value = '', onChange, errors, hasError, touched }) => {
          console.log('🚀 ~ errors:', errors, hasError, touched)
          return (
            <>
              <Select
                sx={{ width: '70%' }}
                id="demo-simple-select"
                value={value}
                onChange={({ target }) => {
                  setSubject({ role: target.value })
                  onChange(target.value)
                }}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  <em>Select a role</em>
                </MenuItem>
                <MenuItem value={'user'}>User</MenuItem>
                <MenuItem value={'admin'}>Admin</MenuItem>
                <MenuItem value={'super'}>Super</MenuItem>
                <MenuItem value={'external'}>External</MenuItem>
              </Select>
              {hasError && errors && (
                <Typography color="error">{errors[0]}</Typography>
              )}
            </>
          )
        }}
      </FlowerField>
      <FlowerNavigate action="next">
        <Button variant="contained" disabled={!getData('role')}>
          Login
        </Button>
      </FlowerNavigate>
    </Box>
  )
}
