import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { DATE_FORMAT_YYYY_MM_DD, formatDate, randomString } from 'src/utils';
import { FormContainer, TextFieldElement, useForm } from 'react-hook-form-mui';
import dayjs from 'dayjs';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { IProduct } from 'src/types';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  product,
  productList,
  productSelect,
  setLoading,
  updateListProduct,
} from 'src/store/slices/app';
import { dispatch } from 'src/store/app-dispatch';
import { equals } from 'rambda';
import { PATH } from 'src/constants';
import UploadImage from './UploadImage';
import ProductCodeInput from './inputs/ProductCode';
import CreateAtDatePicker from './selects/CreateAt';

export enum ProductFormEnum {
  productName = 'productName',
  productCode = 'productCode',
  productPrice = 'productPrice',
  productCreateAt = 'productCreateAt',
  productDescription = 'productDescription',
}
export type ProductForm = Record<ProductFormEnum, string> & {
  [ProductFormEnum.productPrice]: any;
};

const getBase64 = (file: any): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const ProductFormComponent = () => {
  const [t] = useTranslation();
  const theme = useTheme();

  const router = useRouter();
  const productSelector = useSelector(product);
  const productsSelector = useSelector(productList);

  const [selectedFile, setSelectedFile] = useState<string>('');

  const productCodeIsExist = (productCode: string) => {
    const productIndex = productsSelector?.findIndex((_item) => {
      return _item?.code?.toUpperCase() === productCode?.toUpperCase();
    });

    if (productIndex === -1) {
      return false;
    }
    return true;
  };

  const isDisableProductCode = useMemo(() => {
    return !!productSelector;
  }, []);

  // Validate
  const validate = useMemo<yup.SchemaOf<ProductForm>>(
    () =>
      yup.object().shape({
        [ProductFormEnum.productName]: yup.string().required(),
        [ProductFormEnum.productCode]: yup.string().required(),
        [ProductFormEnum.productPrice]: yup.string().required(),
        [ProductFormEnum.productCreateAt]: yup.string().required(),
        [ProductFormEnum.productPrice]: yup.string().required(),
        [ProductFormEnum.productDescription]: yup.string().required(),
      }),
    []
  );

  // Resolver
  const resolver = yupResolver(validate);

  // Form Context
  const formContext = useForm<ProductForm>({
    resolver,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    if (productSelector) {
      formContext.setValue(
        ProductFormEnum.productPrice,
        parseFloat(productSelector?.price ?? '0')
      );
      formContext.setValue(
        ProductFormEnum.productCode,
        productSelector?.code ?? ''
      );
      formContext.setValue(
        ProductFormEnum.productName,
        productSelector?.name ?? ''
      );
      formContext.setValue(
        ProductFormEnum.productDescription,
        productSelector?.description ?? ''
      );

      formContext.setValue(
        ProductFormEnum.productCreateAt,
        productSelector?.createAt ?? ''
      );
      setSelectedFile(productSelector?.src ?? '');
    } else {
      formContext.setValue(ProductFormEnum.productPrice, '');
      formContext.setValue(ProductFormEnum.productCode, '');
      formContext.setValue(ProductFormEnum.productName, '');
      formContext.setValue(ProductFormEnum.productDescription, '');
      formContext.setValue(
        ProductFormEnum.productCreateAt,
        dayjs().format(DATE_FORMAT_YYYY_MM_DD)
      );
      setSelectedFile('');
    }
  }, [productSelector]);

  useEffect(() => {
    return () => {
      dispatch(productSelect(undefined));
    };
  }, []);

  // Upload file image (Add/Change)
  const handleUploadFileImage = async (file: ChangeEvent) => {
    const { files } = file.target as HTMLInputElement;
    let src = '';
    if (files?.length) {
      src = await getBase64(files?.[0]);
      setSelectedFile(src);
    }
  };

  // Remove file image (Remove)
  const handleRemoveFileImage = () => {
    setSelectedFile('');
  };

  const addProduct = (productItem: IProduct) => {
    if (productsSelector?.length) {
      const productProcess = [...productsSelector, productItem];
      if (productProcess) {
        dispatch(updateListProduct(productProcess));
      }
      dispatch(setLoading(true));

      setTimeout(() => {
        dispatch(setLoading(false));
      }, 600);
    }
  };

  const updateProduct = (productItem: IProduct) => {
    if (productsSelector?.length) {
      const productIndex = productsSelector?.findIndex((_item) => {
        return equals(_item?.id, productItem?.id);
      });
      const productProcess = [...productsSelector];
      if (productProcess?.[productIndex]) {
        productProcess[productIndex] = productItem;
      }
      if (productProcess) {
        dispatch(updateListProduct(productProcess));
      }
      dispatch(setLoading(true));

      setTimeout(() => {
        dispatch(setLoading(false));
      }, 600);
    }
  };

  const onSubmit = (productItem: IProduct) => {
    if (productSelector) {
      updateProduct({ ...productItem, id: productSelector?.id });
    } else {
      addProduct({ ...productItem });
    }
    router.push(PATH.INDEX);
  };

  // Submit Save
  const onSave = async (data: ProductForm) => {
    onSubmit?.({
      name: data?.productName,
      code: data?.productCode,
      createAt: formatDate(data?.productCreateAt),
      id: randomString(3),
      price: data?.productPrice,
      src: selectedFile,
      description: data.productDescription,
    });
    formContext?.reset();
    setSelectedFile('');
  };

  const handleCancel = () => {
    formContext?.reset();
  };

  // Form Context
  const formComponent = () => {
    // Render Footer Button
    const renderFooterButton = () => {
      return (
        <>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ fontSize: theme.spacing(4), fontWeight: 400 }}
            onClick={handleCancel}
          >
            {t('cancel')}
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{ fontSize: theme.spacing(4), fontWeight: 400 }}
          >
            {t('save')}
          </Button>
        </>
      );
    };

    return (
      <FormContainer formContext={formContext} onSuccess={onSave}>
        <DialogContent>
          <DialogContentText>
            <ProductCodeInput
              onCheckExit={productCodeIsExist}
              name={ProductFormEnum.productCode}
              codePre={formContext.getValues(ProductFormEnum.productCode)}
              isDisable={isDisableProductCode}
            />

            <TextFieldElement
              fullWidth
              id="productName"
              sx={{ marginBottom: 4 }}
              name={ProductFormEnum.productName}
              label={t('product_name')}
              placeholder={t('enter_your_product_name')}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />

            <TextFieldElement
              fullWidth
              id="productPrice"
              sx={{ marginBottom: 4 }}
              name={ProductFormEnum.productPrice}
              label={t('product_price')}
              placeholder={t('enter_your_product_price')}
              InputLabelProps={{
                shrink: true,
              }}
              type="number"
              required
            />
            <Box sx={{ marginBottom: 4 }}>
              <CreateAtDatePicker name={ProductFormEnum.productCreateAt} />
            </Box>

            <TextFieldElement
              fullWidth
              autoFocus
              id="description"
              label={t('product_description')}
              placeholder={`${t('enter_new_description')}`}
              sx={{
                mb: 4,
                mt: theme.spacing(1),
                '& .MuiFormLabel-root': {
                  px: theme.spacing(4),
                  background: 'white',
                },
                '& .MuiFormHelperText-root': {
                  textAlign: 'right',
                  '&.Mui-error': {
                    textAlign: 'left',
                  },
                },
              }}
              name={ProductFormEnum.productDescription}
              InputLabelProps={{
                shrink: true,
              }}
              multiline
              maxRows={4}
              required
            />

            <UploadImage
              image={selectedFile}
              handleUploadFileImage={handleUploadFileImage}
              handleRemoveFileImage={handleRemoveFileImage}
            />
          </DialogContentText>
        </DialogContent>

        <DialogActions>{renderFooterButton()}</DialogActions>
      </FormContainer>
    );
  };

  return <Box>{formComponent()}</Box>;
};

export default ProductFormComponent;
