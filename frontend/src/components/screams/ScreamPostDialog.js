import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const ScreamPostDialog = ({ open, handleClose }) => {
  const [text, setText] = useState('');
  const handleTextChange = e => {
    setText(e.target.value);
  };
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <div className="px-3 pb-3">
        <DialogTitle className="mb-4">Post a scream</DialogTitle>
        <Grid container direction="column">
          <TextField
            value={text}
            onChange={handleTextChange}
            multiline
            rows={5}
            cols={6}
            variant="outlined"
            label="Scream body"
            className="mb-2"
          />
          <DialogActions>
            <Button color="primary">Send</Button>
          </DialogActions>
        </Grid>
      </div>
    </Dialog>
  );
};

export default ScreamPostDialog;
