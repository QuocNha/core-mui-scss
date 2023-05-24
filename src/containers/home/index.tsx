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
import { FormDialogRef } from 'src/components/shared-components/modal/dialog';
import ModalConfirmChange, {
  ModalConfirmChangeRef,
} from 'src/components/shared-components/modal/confirm';

import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { setLoading } from 'src/store/slices/app';
import { dispatch } from 'src/store/app-dispatch';

import UnAuthLayout from 'src/layouts/UnAuthLayout';
import CategoryList from './components/CategoryList';

import { IProduct, listProduct } from './components/mockData';
import ActionProductList from './components/ActionProductList';
import ProductModal from './components/modals/ProductModal';

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

  productBySelect?: IProduct;
  setProductBySelect?: Dispatch<SetStateAction<IProduct | undefined>>;

  typeProductList?: TypeProductListEnum;
  setTypeProductList?: Dispatch<SetStateAction<TypeProductListEnum>>;

  removeProduct?: (id: string) => void;
  onOpenModalUpdateProduct?: () => void;
  onCloseModalUpdateProduct?: () => void;
  addProduct?: (productItem: IProduct) => void;

  productCodeIsExist?: (productCode: string) => boolean;
  onOpenModalConfirmDelete?: () => void;
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

  const [typeProductList, setTypeProductList] = useState<TypeProductListEnum>(
    TypeProductListEnum.grid
  );

  const [products, setProducts] = useState<IProduct[]>([]);

  const [productBySelect, setProductBySelect] = useState<IProduct>();

  // Modal
  const modalUpdateProductRef = useRef<FormDialogRef>(null);

  const modalConfirmDelete = useRef<ModalConfirmChangeRef>(null);

  useEffect(() => {
    if (typeProductList === TypeProductListEnum.grid) {
      setProducts(listProduct ?? []);
    }
  }, [listProduct, typeProductList]);

  const productCodeIsExist = (productCode: string) => {
    const productIndex = products?.findIndex((_item) => {
      return _item?.code?.toUpperCase() === productCode?.toUpperCase();
    });

    if (productIndex === -1) {
      return false;
    }
    return true;
  };

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

  const addProduct = (productItem: IProduct) => {
    dispatch(setLoading(true));
    const productProcess = [...products, productItem];
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

  const onCloseModalUpdateProduct = () => {
    setProductBySelect(undefined);
    modalUpdateProductRef.current?.hide();
  };

  const onOpenModalUpdateProduct = () => {
    modalUpdateProductRef.current?.open();
  };

  const onOpenModalConfirmDelete = () => {
    modalConfirmDelete?.current?.open();
  };

  const onConfirmChanceDelete = () => {
    removeProduct(productBySelect?.id ?? '');
    modalConfirmDelete?.current?.hide();
  };

  const renderProductModal = useCallback(() => {
    let titleModal = '';
    if (productBySelect) {
      titleModal = t('update_product');
    } else {
      titleModal = t('add_product');
    }

    return (
      <ProductModal
        title={titleModal}
        modalRef={modalUpdateProductRef}
        onClose={onCloseModalUpdateProduct}
        onSubmit={addProduct}
        product={productBySelect}
      />
    );
  }, [
    !!onCloseModalUpdateProduct,
    !!onOpenModalUpdateProduct,
    productBySelect,
  ]);

  const values = useMemo(
    () => ({
      products,
      setProducts,
      setProductBySelect,
      productBySelect,
      typeProductList,
      setTypeProductList,
      removeProduct,

      onOpenModalUpdateProduct,
      onCloseModalUpdateProduct,

      addProduct,

      productCodeIsExist,

      onOpenModalConfirmDelete,
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

      onOpenModalUpdateProduct,
      onCloseModalUpdateProduct,

      addProduct,

      productCodeIsExist,

      onOpenModalConfirmDelete,
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
      {renderProductModal()}
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
