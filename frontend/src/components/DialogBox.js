import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);
export default function DialogBox({ label, title, text }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const createText = (text) => {
    return { __html: text };
  };
  return (
    <div>
      <span
        style={{ color: '#012970', cursor: 'pointer', fontSize: '1rem' }}
        onClick={handleClickOpen}
      >
        {label}
      </span>
      <Dialog
        key={title}
        onClose={handleClose}
        aria-labelledby={title}
        open={open}
      >
        <DialogTitle id={title} onClose={handleClose}>
          {title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography
            gutterBottom
            dangerouslySetInnerHTML={createText(text)}
          ></Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
