import * as React from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';

import { ModalDialogProps } from './ModalDialog';

import Loading from '../../Loading';
// Styled Item
const DialogStyled = styled(Dialog)<DialogProps>(({ theme }) => ({
  // Custom Modal small and scroll content
  '& .MuiDialog-paper:not(.MuiDialog-paperFullScreen)': {
    width: `70% !important`,
    maxWidth: `70% !important`,
  },
  '&.custom-dialog': {
    '& .MuiDialog-paper:not(.MuiDialog-paperFullScreen)': {
      width: `${theme.spacing(126.5)} !important`,
      maxWidth: `${theme.spacing(126.5)} !important`,
      overflow: 'hidden',
    },
    '& .MuiDialogContent-root': {
      maxHeight: `calc(100vh - ${theme.spacing(66.5)})`,
      overflow: 'auto',
      paddingBottom: 0,
    },
    '& .MuiDialogActions-root': {
      justifyContent: 'center',
    },
    '& .MuiDialogContent-title': {
      padding: theme.spacing(8, 8, 0),
    },
  },

  '&.custom-dialog-big': {
    '& .MuiDialog-paper:not(.MuiDialog-paperFullScreen)': {
      width: `70% !important`,
      maxWidth: `70% !important`,
      overflow: 'hidden',
    },
    '& .MuiDialogContent-root': {
      maxHeight: `calc(100vh - ${theme.spacing(90)})`,
      overflow: 'auto',
      paddingTop: 0,
    },
    '& .MuiDialogActions-root': {
      paddingTop: theme.spacing(4),
      display: 'flex',
      justifyContent: 'center',
    },
    '& .MuiDialogContent-group-title': {
      display: 'none',
    },
  },
  '&.custom-dialog-normal': {
    '& .MuiDialog-paper:not(.MuiDialog-paperFullScreen)': {
      width: `70% !important`,
      maxWidth: `70% !important`,
      overflowY: 'unset',
    },
    '& .MuiDialogContent-root': {
      maxHeight: `calc(100vh - ${theme.spacing(90)})`,
      overflowY: 'unset',
      paddingTop: 0,
    },
    '& .MuiDialogActions-root': {
      paddingTop: theme.spacing(4),
      display: 'flex',
      justifyContent: 'center',
    },
    '& .MuiDialogContent-group-title': {
      display: 'none',
    },
  },
  '&.custom-dialog-result-delele-account': {
    '& .MuiDialogContent-group-title': {
      display: 'none',
    },
    '& .MuiDialogTitle-root': {
      display: 'none',
    },
  },
  '& .MuiDialogContent-group-title': {
    marginBottom: theme.spacing(3),
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8),
    // textTransform: 'capitalize',
    '& .MuiDialogContent-subTitle': {
      fontSize: theme.spacing(4.5),
      fontWeight: 600,
    },
    '& .MuiDialogContent-desc': {
      fontSize: theme.spacing(3.5),
    },
  },
  '& .MuiDialogContent-desc': {
    fontSize: theme.spacing(3.5),
  },
  '& .MuiDialogContent-title': {
    fontSize: theme.spacing(8.5),
    fontWeight: 500,
  },
  // '& .MuiDialogTitle-root': {
  //   textTransform: 'capitalize',
  // },
}));

const FormDialog = forwardRef<FormDialogRef, ModalDialogProps>(
  function FormDialog(
    {
      icon,
      title,
      desc,
      subTitle,
      formComponent,
      onClose: onCloseModal,
      onOpenModal,
      loading,
      classCustom = '',
      subTitleProps,
      ...rest
    },
    ref
  ) {
    const [open, setOpen] = React.useState<boolean>();

    useEffect(() => {
      if (open === false && typeof onCloseModal === 'function') {
        onCloseModal?.();
      }
    }, [open]);

    const onClose = useCallback(() => {
      setOpen(false);
    }, []);

    const onOpen = () => {
      if (onOpenModal && !open) {
        onOpenModal();
      }
      setOpen(true);
    };

    useImperativeHandle(
      ref,
      () => ({
        hide: onClose,
        open: onOpen,
      }),
      []
    );

    return (
      <DialogStyled
        open={open ?? false}
        onClose={onClose}
        className={classCustom}
        sx={{
          backgroundColor: 'transparent',
        }}
        {...rest}
      >
        {(!loading && (
          <>
            <DialogTitle className="MuiDialogContent-title">
              <Stack alignItems="center">
                {icon}
                {title}
              </Stack>
            </DialogTitle>
            <Box className="MuiDialogContent-group-title">
              {!!subTitle && (
                <Typography
                  className="MuiDialogContent-subTitle"
                  variant="body1"
                  {...subTitleProps}
                >
                  {subTitle}
                </Typography>
              )}
              {!!desc && (
                <Typography className="MuiDialogContent-desc" variant="body1">
                  {desc}
                </Typography>
              )}
            </Box>
            {formComponent?.()}
          </>
        )) || <Loading />}
      </DialogStyled>
    );
  }
);

export interface FormDialogRef {
  open(): void;

  hide(): void;
}

export default FormDialog;
