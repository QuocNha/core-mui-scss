import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { styled } from '@mui/material/styles';
import { setLoading } from 'src/store/slices/app';
import { dispatch } from 'src/store/app-dispatch';

import UnAuthLayout from 'src/layouts/UnAuthLayout';
import CategoryList from './components/CategoryList';

import { IProduct, listProduct } from './components/mockData';
import ActionProductList from './components/ActionProductList';
import ProductListTable from './components/table/ProductList';

const HomeWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
}));

const BodyContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
}));

export enum TypeProductListEnum {
  list = 'List',
  grid = 'Grid',
}

export interface ProductListContext {
  products?: IProduct[];
  setProducts?: Dispatch<SetStateAction<IProduct[]>>;
  removeProduct?: (id: string) => void;
  typeProductList?: TypeProductListEnum;
  setTypeProductList?: Dispatch<SetStateAction<TypeProductListEnum>>;
}

export const ProductListContext = React.createContext<ProductListContext>({});

export const useCustomerListContext = () => {
  const context = useContext(ProductListContext);

  if (context === undefined) {
    throw new Error(
      'useCustomerListContext must be used within a ProductListContext.Provider'
    );
  }
  return context;
};

const HomePage = () => {
  const [typeProductList, setTypeProductList] = useState<TypeProductListEnum>(
    TypeProductListEnum.grid
  );
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (typeProductList === TypeProductListEnum.grid) {
      setProducts(listProduct ?? []);
    }
  }, [listProduct, typeProductList]);

  const removeProduct = (id: string) => {
    dispatch(setLoading(true));
    const productProcess = [...products]?.filter((_item) => _item?.id !== id);
    if (productProcess) {
      setProducts(productProcess);
    }
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 600);
  };

  const renderProductList = useCallback(() => {
    return (
      <CategoryList list={products ?? []} typeProductList={typeProductList} />
    );
  }, [typeProductList, products]);

  const values = useMemo(
    () => ({
      products,
      setProducts,
      removeProduct,
    }),
    // eslint-disable-next-line no-restricted-globals
    [products, setProducts, removeProduct, typeProductList, setTypeProductList]
  );

  return (
    <ProductListContext.Provider value={values}>
      <HomeWrapper>
        <ActionProductList
          setTypeProductList={setTypeProductList}
          typeProductList={typeProductList}
        />
        <BodyContainer>{renderProductList()}</BodyContainer>
      </HomeWrapper>
    </ProductListContext.Provider>
  );
};

HomePage.getLayout = (page: ReactNode) => <UnAuthLayout>{page}</UnAuthLayout>;

export default HomePage;
