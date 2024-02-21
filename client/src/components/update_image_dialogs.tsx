import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { UpdateImage } from './update_image';
import { updateImageAPI } from '../api/image.api';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export const UpdateImageDialogs = (props: any) => {
  const img: Image = props.image;
  const [newName, setNewName]: any[] = useState(img.image_name);
  const [category, setCategory] = useState(img.category);
  const [people, setPeople] = useState(img._);
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setNewName(img.image_name);
    setCategory(img.category);
    setPeople(img._);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const updateImage = () => {
    
    const image: Image = {
      image_name: newName,
      image_creation_date: img.image_creation_date,
      image_url: img.image_url,
      category: category,
      _: people
    }
    const obj = {
      id: img.idimage || 0,
      image: image
    }
    dispatch(updateImageAPI(obj) as unknown as AnyAction)
    handleClose();
  }


  return (
    <div>
      <button title='edit' className="btn" onClick={handleClickOpen}>
      <i className="bi bi-pencil-square"></i>
      </button>
      <BootstrapDialog
        // fullWidth={}
        maxWidth="lg"
        scroll="body"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          update image
        </BootstrapDialogTitle>
        <DialogContent dividers >
          <UpdateImage category={category} setCategory={setCategory} people={people} setPeople={setPeople} newName={newName} setNewName={setNewName} img={img}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={updateImage}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}