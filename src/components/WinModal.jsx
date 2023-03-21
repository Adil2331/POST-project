import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { width } from '@mui/system';
// import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import AlarmIcon from '@mui/icons-material/Alarm';

const style = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const WinModal = ({ id, name, study, work, phone, lists, setLists }) => {
  const [open, setOpen] = React.useState(false);
  // const [state, setState] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button sx={{ ml: 90 }} onClick={handleClose}>
            Close
          </Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              type="text"
              // onChange={hundleInput }
              style={{ width: 400, border: 'none' }}
              value={study}
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {work},
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {phone}
          </Typography>
          <Button sx={{ ml: 90 }} onClick={handleClose}>
            Update
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
