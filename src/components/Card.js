import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import "../style/Card.css"




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const Card = ({name, description, imageUrl}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
    <React.Fragment>
        <div className="card-body" onClick={handleOpen}>
            <div className="card-title">{name}</div>
            <div className="card-button">{description}</div>
        </div>
        <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <img className="doc-img" src={imageUrl} alt="test"/>
                <Button onClick={handleClose}>Close Child Modal</Button>
            </Box>
        </Modal>
    </React.Fragment>
    );
};


export default Card;