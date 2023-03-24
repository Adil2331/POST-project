import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
// import { width } from '@mui/system';
// import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import AlarmIcon from '@mui/icons-material/Alarm';
// import CloseIcon from '@mui/icons-material/Close';

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

export const WinModal = ({ element, lists, setLists }) => {
  const [open, setOpen] = React.useState(false);

  // const [name, setName] = useState(element.name);
  const [study, setStudy] = useState(element.study);
  const [work, setWork] = useState(element.work);
  const [phone, setPhone] = useState(element.phone);

  // const [state, setState] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const edit = () => {
    setLists(
      lists.map((e) => {
        if (e.id === element.id) {
          return {
            id: e.id,
            name: e.name,
            study: study,
            work: work,
            phone: phone,
          };
        } else {
          return e;
        }
      })
    );
    handleClose();
  };
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
          <Button sx={{ ml: 92 }} onClick={handleClose}>
            <svg fill="none" viewBox="0 0 24 24" height="25" width="25">
              <path
                fill="currentColor"
                d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
              />
            </svg>
          </Button>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {element.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              type="text"
              style={{ width: 400, height: 40 , fontSize: 20 }}
              value={study}
              onChange={(e) => setStudy(e.target.value)}
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              type="text"
              style={{ width: 400,  height: 40 , fontSize: 20 }}
              value={work}
              onChange={(e) => setWork(e.target.value)}
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              type="text"
              style={{ width: 400, height: 40 , fontSize: 20 }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Typography>
          <Button sx={{ ml: 90 }} onClick={edit}>
            Update
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
