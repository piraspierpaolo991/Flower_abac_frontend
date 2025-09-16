import { PropsWithChildren } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Stack,
} from '@mui/material';
import { useFlowerForm } from '@flowerforce/flower-react-form';
import UserAvatar from './UserAvatar';
import { InfoBox } from './InfoBox';

export const Layout = ({ children }: PropsWithChildren) => {
  const { getData } = useFlowerForm('flow');
  const userId = getData('userId');
  const role = getData('role');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: '#171010' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" gap={2}>
            <img src="/flower-logo.svg" alt="Flower logo" />
            <Typography variant="h6" component="div">
              Flower ABAC Test
            </Typography>
          </Stack>

          <Stack direction="row" gap={2}>
            <InfoBox />

            {role && userId && <UserAvatar role={role} />}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container sx={{ flex: 1, py: 3 }}>{children}</Container>
    </Box>
  );
};
