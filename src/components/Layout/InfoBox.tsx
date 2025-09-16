import React, { useState } from 'react';
import {
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { InfoPage } from '../../Steps/InfoPage';
import { getRawRules } from '@flowerforce/flower-core';

export const InfoBox = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const abacRules = getRawRules();
  const handleDownload = () => {
    if (!abacRules) return;
    const blob = new Blob([JSON.stringify(abacRules, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'abac-rules.json';
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Info icon in header */}
      <Tooltip title="Information" arrow>
        <IconButton color="primary" onClick={handleOpen}>
          <InfoOutlinedIcon />
        </IconButton>
      </Tooltip>

      {/* Modal with info content */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: { display: 'flex', flexDirection: 'column' },
        }}
      >
        <DialogTitle>Access Control Rules (ABAC)</DialogTitle>

        {/* Scrollable content */}
        <DialogContent dividers sx={{ flex: 1, overflowY: 'auto' }}>
          <InfoPage />
        </DialogContent>

        {/* Sticky bottom button */}
        <DialogActions
          sx={{
            position: 'sticky',
            bottom: 0,
            bgcolor: 'background.paper',
            borderTop: 1,
            borderColor: 'divider',
            p: 2,
          }}
        >
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              onClick={handleDownload}
            >
              Download Rules
            </Button>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};
