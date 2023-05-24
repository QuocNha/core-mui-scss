import { GridColDef } from '@mui/x-data-grid';
import { translate } from 'src/i18n/translate';
import React from 'react';
import { Box } from '@mui/material';
import { IProduct } from '../mockData';
import { ProductCell } from './ProductCell';
import ActionsCell from '../ActionsCell';

export const productListColumn: (Omit<GridColDef, 'sortComparator'> & {
  field: keyof IProduct | string;
  sortComparator?: () => any;
})[] = [
  {
    field: 'no',
    headerName: translate('no.'),
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    minWidth: 50,
    width: 50,
  },
  {
    field: 'name',
    headerName: translate('name'),
    sortable: true,
    headerAlign: 'center',
    align: 'center',
    minWidth: 260,
    flex: 1,
    renderCell: (params: { row: IProduct }) => (
      <ProductCell name={params?.row?.name} picture={params?.row?.src} />
    ),
  },

  {
    field: 'createAt',
    headerName: translate('CreateAt'),
    sortable: true,
    headerAlign: 'center',
    align: 'center',
    minWidth: 100,
    flex: 1,
    renderCell: (params: { row: IProduct }) => (
      <Box>{params?.row?.createAt}</Box>
    ),
  },
  {
    field: 'price',
    headerName: translate('price'),
    sortable: true,
    headerAlign: 'center',
    align: 'center',
    minWidth: 100,
    flex: 1,
    renderCell: (params: { row: IProduct }) => <Box>{params?.row?.price}</Box>,
  },
  {
    field: 'description',
    headerName: translate('Description'),
    sortable: true,
    headerAlign: 'left',
    align: 'left',
    minWidth: 260,
    flex: 1,
    renderCell: (params: { row: IProduct }) => (
      <Box>{params?.row?.description}</Box>
    ),
  },
  {
    field: 'actions',
    headerName: '',
    description: '',
    sortable: false,
    align: 'center',
    headerAlign: 'center',
    minWidth: 70,
    width: 70,
    renderCell: (params) => <ActionsCell params={params.row as IProduct} />,
    editable: false,
  },
];
