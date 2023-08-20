import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { AddPerson } from './add_person';

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

export const AddPersonDialog = (props: any) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <div className="card card-body" onClick={handleClickOpen}>
                <h5 className="card-title text-primary">other person</h5>
            </div>
            {/* <div className="card " >
        <div className="card-body d-flex justify-content-between">
            <h5 className="card-title">{person.person_name}</h5>
            <div className="d-flex align-items-start">
                <button title="edit" type="button" className="btn btn-light" onClick={() => { setIsShowUpdate(!isShowUpdate); }}><i className="bi bi-pencil-square"></i></button>
                <div className=""><DeletePerson setPeople={props.setPeople} personsControlMap={props.personsControlMap} id={person.idperson} /></div>
            </div>
        </div> */}
            <BootstrapDialog
                scroll="body"
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    other person
                </BootstrapDialogTitle>
                <DialogContent dividers >
                    <div className='w-30vw'>
                        <AddPerson />
                    </div>
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}