import { useMemo } from 'react';
import { Box, styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { IProduct } from 'src/types';
import { productListColumn } from './productListColumn.const';

export interface IProductListTable {
  list: IProduct[];
}

export const ProductListWrapper = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(7.5),
  marginRight: theme.spacing(7.5),
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 7px 29px 0px rgb(0 0 0 / 12%)',
}));

export const DataGridStyled = styled(DataGrid)(({ theme }) => ({}));

const ProductListTable = ({ list }: IProductListTable) => {
  const processedProductList = useMemo(() => {
    return list?.map((_product: IProduct, index: number) => ({
      ..._product,
      no: _product?.code,
    }));
  }, [list]);

  return (
    <ProductListWrapper>
      <DataGridStyled
        rows={processedProductList || []}
        autoHeight
        rowHeight={80}
        //   onRowClick={onRowClick as any}
        columns={productListColumn}
        disableExtendRowFullWidth
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        sx={{
          '&.MuiDataGrid-root': {
            height: '100%',
            cursor: 'pointer',
          },
        }}
      />
    </ProductListWrapper>
  );
};

export default ProductListTable;
