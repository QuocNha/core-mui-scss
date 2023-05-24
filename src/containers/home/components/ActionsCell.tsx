import React, { useCallback } from 'react';
import { PATH } from 'src/constants';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { equals } from 'rambda';
import { useTranslation } from 'react-i18next';

import { useRouter } from 'next/router';
import { DeleteOutline, ModeEditOutlineOutlined } from '@mui/icons-material';
import { IProduct } from 'src/types';
import { useProductListContext } from '..';
import { productSelect } from 'src/store/slices/app';
import { dispatch } from 'src/store/app-dispatch';

const CustomerListActionsCell = ({ params }: { params: IProduct }) => {
  const router = useRouter();
  const {
    setProductBySelect,
    // onOpenModalUpdateProduct,
    onOpenModalConfirmDelete,
  } = useProductListContext();
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
    if (params) {
      dispatch(productSelect(params));
      router.push(`${PATH.ProductEdit}/${params?.id}`);
    }
    // onOpenModalUpdateProduct?.();
    handleClose();
  }, []);

  const handleDelete = useCallback(() => {
    setProductBySelect?.({ ...params });
    onOpenModalConfirmDelete?.();
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
