import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { BigImage } from './big_image';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const BigImageDialog = (props: any) => {
    const image = props.image;
    const [open, setOpen] = React.useState(true);
    const [imgName ,setImgName] =React.useState(image.image_name)
    const handleClose = () => {
        props.setIsBig(false)
        setOpen(false);
    };

    return (
        <div className='w-40vw'>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {imgName}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <BigImage image={image} setImgName={setImgName}/>
            </Dialog>
        </div>
    );
}