import * as React from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, DialogActions, Typography } from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { useTheme } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { ModalConfirmProps } from './ModalConfirm';

// Styled Item
const DialogStyled = styled(Dialog)<DialogProps>(({ theme }) => ({
  '& .MuiDialogContent-group-title': {
    marginBottom: theme.spacing(3),
    paddingRight: theme.spacing(9),
    paddingLeft: theme.spacing(9),
    '& .MuiDialogContent-title': {
      fontSize: theme.spacing(4.5),
      fontWeight: 600,
      textAlign: 'center',
    },
  },
}));

const ModalConfirmChange = forwardRef<ModalConfirmChangeRef, ModalConfirmProps>(
  function FormDialog({ title, onClickConfirm }, ref) {
    const theme = useTheme();

    const [t] = useTranslation();

    const [open, setOpen] = React.useState(false);

    const onClose = () => {
      setOpen(false);
    };

    const onOpen = () => {
      setOpen(true);
    };

    useImperativeHandle(
      ref,
      () => ({
        hide: onClose,
        open: onOpen,
      }),
      [ref]
    );

    return (
      <DialogStyled open={open} onClose={onClose}>
        <DialogTitle className="MuiDialogContent-title">
          <WarningAmberRoundedIcon
            sx={{ fontSize: theme.spacing(14) }}
            color="error"
          />
        </DialogTitle>
        <Box className="MuiDialogContent-group-title">
          <Typography className="MuiDialogContent-title" variant="body1">
            {title}
          </Typography>
        </Box>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            {t('cancel')}
          </Button>
          <Button
            variant="contained"
            type="submit"
            color="error"
            onClick={onClickConfirm}
          >
            {t('change')}
          </Button>
        </DialogActions>
      </DialogStyled>
    );
  }
);

export interface ModalConfirmChangeRef {
  open(): void;

  hide(): void;
}

export default ModalConfirmChange;
