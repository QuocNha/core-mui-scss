import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
// import { equals } from 'rambda';
import { useSelector } from 'react-redux';

// import { FormDialogRef } from 'src/components/shared-components/modal/dialog';
import ModalConfirmChange, {
  ModalConfirmChangeRef,
} from 'src/components/shared-components/modal/confirm';

import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import {
  getListProduct,
  setLoading,
  productList,
  updateListProduct,
} from 'src/store/slices/app';
import { dispatch } from 'src/store/app-dispatch';
import { IProduct } from 'src/types';

import UnAuthLayout from 'src/layouts/UnAuthLayout';
import CategoryList from './components/CategoryList';

import { listProduct } from './mockDataTest';
import ActionProductList from './components/ActionProductList';
// import ProductModal from './components/modals/ProductModal';

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
  products?: IProduct[] | undefined;
  setProducts?: Dispatch<SetStateAction<IProduct[] | undefined>>;

  productBySelect?: IProduct;
  setProductBySelect?: Dispatch<SetStateAction<IProduct | undefined>>;

  typeProductList?: TypeProductListEnum;
  setTypeProductList?: Dispatch<SetStateAction<TypeProductListEnum>>;

  removeProduct?: (id: string) => void;
  // onOpenModalUpdateProduct?: () => void;
  // onCloseModalUpdateProduct?: () => void;
  // addProduct?: (productItem: IProduct) => void;

  // productCodeIsExist?: (productCode: string) => boolean;
  onOpenModalConfirmDelete?: () => void;

  // updateProduct?: (productItem: IProduct) => void;
}

export const ProductListContext = React.createContext<ProductListContext>({});

export const useProductListContext = () => {
  const context = useContext(ProductListContext);

  if (context === undefined) {
    throw new Error(
      'useCustomerListContext must be used within a ProductListContext.Provider'
    );
  }
  return context;
};

const HomePage = () => {
  const { t } = useTranslation();

  const productsSelector = useSelector(productList);

  const [typeProductList, setTypeProductList] = useState<TypeProductListEnum>(
    TypeProductListEnum.grid
  );

  const [products, setProducts] = useState<IProduct[]>();

  const [productBySelect, setProductBySelect] = useState<IProduct>();

  // Modal
  // const modalUpdateProductRef = useRef<FormDialogRef>(null);

  const modalConfirmDelete = useRef<ModalConfirmChangeRef>(null);

  useEffect(() => {
    if (!productsSelector?.length) {
      dispatch(getListProduct(listProduct));
    }
  }, []);

  useEffect(() => {
    if (productsSelector?.length) {
      setProducts(productsSelector);
    }
  }, [productsSelector]);

  // const productCodeIsExist = (productCode: string) => {
  //   const productIndex = products?.findIndex((_item) => {
  //     return _item?.code?.toUpperCase() === productCode?.toUpperCase();
  //   });

  //   if (productIndex === -1) {
  //     return false;
  //   }
  //   return true;
  // };

  const removeProduct = (id: string) => {
    if (products?.length) {
      dispatch(setLoading(true));
      const productProcess = [...products]?.filter((_item) => _item?.id !== id);
      if (productProcess) {
        setProducts(productProcess);
        dispatch(updateListProduct(productProcess));
      }
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 600);
    }
  };

  // const updateProduct = (productItem: IProduct) => {
  //   if (products?.length) {
  //     const productIndex = products?.findIndex((_item) => {
  //       return equals(_item?.id, productItem?.id);
  //     });
  //     const productProcess = [...products];
  //     if (productProcess?.[productIndex]) {
  //       productProcess[productIndex] = productItem;
  //     }
  //     if (productProcess) {
  //       setProducts(productProcess);
  //     }
  //     dispatch(setLoading(true));

  //     setTimeout(() => {
  //       dispatch(setLoading(false));
  //     }, 600);
  //   }
  // };

  // const addProduct = (productItem: IProduct) => {
  //   if (products?.length) {
  //     const productProcess = [...products, productItem];
  //     if (productProcess) {
  //       setProducts(productProcess);
  //     }
  //     dispatch(setLoading(true));

  //     setTimeout(() => {
  //       dispatch(setLoading(false));
  //     }, 600);
  //   }
  // };

  // const onSubmit = (productItem: IProduct) => {
  //   if (productBySelect) {
  //     updateProduct({ ...productItem, id: productBySelect?.id });
  //   } else {
  //     addProduct({ ...productItem });
  //   }
  // };

  const renderProductList = useCallback(() => {
    return (
      <CategoryList list={products ?? []} typeProductList={typeProductList} />
    );
  }, [typeProductList, products]);

  // const onCloseModalUpdateProduct = () => {
  //   setProductBySelect(undefined);
  //   modalUpdateProductRef.current?.hide();
  // };

  // const onOpenModalUpdateProduct = () => {
  //   modalUpdateProductRef.current?.open();
  // };

  const onOpenModalConfirmDelete = () => {
    modalConfirmDelete?.current?.open();
  };

  const onConfirmChanceDelete = () => {
    removeProduct(productBySelect?.id ?? '');
    modalConfirmDelete?.current?.hide();
  };

  // const renderProductModal = useCallback(() => {
  //   let titleModal = '';
  //   if (productBySelect) {
  //     titleModal = t('update_product');
  //   } else {
  //     titleModal = t('add_product');
  //   }

  //   return (
  //     <ProductModal
  //       title={titleModal}
  //       modalRef={modalUpdateProductRef}
  //       onClose={onCloseModalUpdateProduct}
  //       onSubmit={onSubmit}
  //       product={productBySelect}
  //     />
  //   );
  // }, [
  //   !!onCloseModalUpdateProduct,
  //   !!onOpenModalUpdateProduct,
  //   productBySelect,
  // ]);

  const values = useMemo(
    () => ({
      products,
      setProducts,
      setProductBySelect,
      productBySelect,
      typeProductList,
      setTypeProductList,
      removeProduct,

      // onOpenModalUpdateProduct,
      // onCloseModalUpdateProduct,

      // addProduct,

      // productCodeIsExist,

      onOpenModalConfirmDelete,

      // updateProduct,
    }),
    // eslint-disable-next-line no-restricted-globals
    [
      products,
      setProducts,
      setProductBySelect,
      productBySelect,

      typeProductList,
      setTypeProductList,
      removeProduct,

      // onOpenModalUpdateProduct,
      // onCloseModalUpdateProduct,

      // addProduct,

      // productCodeIsExist,

      onOpenModalConfirmDelete,
      // updateProduct,
    ]
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
      {/* {renderProductModal()} */}
      <ModalConfirmChange
        ref={modalConfirmDelete}
        title={t('youre_delete_product_$field', {
          field: productBySelect?.name,
        })}
        onClickConfirm={onConfirmChanceDelete}
      />
    </ProductListContext.Provider>
  );
};

HomePage.getLayout = (page: ReactNode) => <UnAuthLayout>{page}</UnAuthLayout>;

export default HomePage;
