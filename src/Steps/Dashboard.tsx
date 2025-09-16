import { useCallback, useEffect } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LockOutline from '@mui/icons-material/LockOutline';
import CheckBoxRounded from '@mui/icons-material/CheckCircleRounded';

import {
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import { Document } from '../types';
import { useFlower } from '@flowerforce/flower-react';
import { useFlowerForm } from '@flowerforce/flower-react-form';
import { getSubject } from '@flowerforce/flower-core';

export const Dashboard = () => {
  const { next } = useFlower();
  const { setData, getData } = useFlowerForm();

  const documents: Record<string, Document> = getData('documents');

  useEffect(() => {
    setData(null, 'requestedAction');
    setData(null, 'error');
  }, []);

  const handleSelection = useCallback((id: string, action: string) => {
    setData(id, 'resourceId');
    setData(action, 'requestedAction');
    next();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Descrizione</TableCell>
            <TableCell>Confidential</TableCell>
            <TableCell>Locked</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell align="right">Azioni</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(documents).map((r) => (
            <TableRow key={r.id} hover>
              <TableCell>
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ maxWidth: 200 }} title={r.name}>
                    {r.name}
                  </Typography>
                  {r.locked && (
                    <LockOutline sx={{ height: '16px', width: '16px' }} />
                  )}
                </Stack>
              </TableCell>
              <TableCell>
                <Typography sx={{ maxWidth: 420 }} title={r.description}>
                  {r.description}
                </Typography>
              </TableCell>
              <TableCell>
                {r.confidential ? <CheckBoxRounded color="success" /> : null}
              </TableCell>
              <TableCell>
                {r.locked ? <CheckBoxRounded color="success" /> : null}
              </TableCell>
              <TableCell>
                {r.ownerID === getSubject()?.id ? (
                  <CheckBoxRounded color="success" />
                ) : null}
              </TableCell>
              <TableCell align="right">
                <Tooltip title="Read">
                  <IconButton
                    onClick={() => handleSelection(r.id, 'read')}
                    aria-label={`read-${r.id}`}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Update">
                  <IconButton
                    onClick={() => handleSelection(r.id, 'update')}
                    aria-label={`edit-${r.id}`}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton
                    onClick={() => handleSelection(r.id, 'delete')}
                    aria-label={`delete-${r.id}`}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
