import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  useTheme,
} from '@mui/material';
import { DATE_FORMAT_YYYY_MM_DD, formatDate, randomString } from 'src/utils';
import { FormContainer, TextFieldElement, useForm } from 'react-hook-form-mui';
import dayjs from 'dayjs';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import FormDialog, {
  FormDialogRef,
} from 'src/components/shared-components/modal/dialog';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import CreateAtDatePicker from '../selects/CreateAt';
import UploadImage from '../UploadImage';
import { IProduct } from '../mockData';
import ProductCodeInput from '../inputs/ProductCode';
import { useProductListContext } from '../..';

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

const ProductModal = ({
  modalRef,
  title = '',
  onClose,
  onSubmit,
  product,
}: {
  modalRef: React.RefObject<FormDialogRef>;
  title?: string;
  onClose?: () => void;
  onSubmit?: (productItem: IProduct) => void;
  product?: IProduct;
}) => {
  const [t] = useTranslation();
  const theme = useTheme();

  const { productCodeIsExist } = useProductListContext();

  const [selectedFile, setSelectedFile] = useState<string>('');

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
    if (product) {
      formContext.setValue(
        ProductFormEnum.productPrice,
        parseFloat(product?.price ?? '0')
      );
      formContext.setValue(ProductFormEnum.productCode, product?.code ?? '');
      formContext.setValue(ProductFormEnum.productName, product?.name ?? '');
      formContext.setValue(
        ProductFormEnum.productDescription,
        product?.description ?? ''
      );

      formContext.setValue(
        ProductFormEnum.productCreateAt,
        product?.createAt ?? ''
      );
      setSelectedFile(product?.src ?? '');
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
  }, [product]);

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
    onClose?.();
  };

  const handleCancel = () => {
    formContext?.reset();
    onClose?.();
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

  return (
    <FormDialog
      title={title}
      ref={modalRef}
      formComponent={formComponent}
      onClose={onClose}
    />
  );
};

export default ProductModal;
