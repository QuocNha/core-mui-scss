import React, { useCallback } from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { equals } from 'rambda';
import { GridRenderCellParams } from '@mui/x-data-grid/models/params/gridCellParams';
import { useTranslation } from 'react-i18next';

import { DeleteOutline, ModeEditOutlineOutlined } from '@mui/icons-material';
import { IProduct } from '../mockData';
import { useCustomerListContext } from '../..';

const CustomerListActionsCell = ({ params }: { params: IProduct }) => {
  const { removeProduct } = useCustomerListContext();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const [t] = useTranslation();

  const theme = useTheme();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleEdit = useCallback(async () => {
    handleClose();
  }, []);

  const handleDelete = useCallback(() => {
    removeProduct?.(params.id as string);
    handleClose();
  }, []);

  return (
    <>
      <IconButton
        sx={{ color: theme.palette.customColors.summaryTitleColor }}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleEdit}>
          <ModeEditOutlineOutlined fontSize="small" color="secondary" />
          <Typography sx={{ fontWeight: 400, ml: 1 }} color="secondary">
            {t('edit')}
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteOutline fontSize="small" color="error" />
          <Typography sx={{ fontWeight: 400, ml: 1 }} color="error">
            {t('delete')}
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default React.memo(CustomerListActionsCell, equals);