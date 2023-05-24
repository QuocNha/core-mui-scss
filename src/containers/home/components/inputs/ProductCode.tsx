import { useEffect, useMemo, useRef, useState } from 'react';
import { TextFieldElement, useFormContext } from 'react-hook-form-mui';
import { useTranslation } from 'react-i18next';
import CircularProgress from '@mui/material/CircularProgress';
import Check from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

interface IProductCodeInputProps {
  name?: string;
  onCheckExit?: (value: string) => boolean;
  codePre: string;
  isDisable: boolean;
}
const ProductCodeInput = ({
  name = '',
  onCheckExit,
  codePre,
  isDisable = false,
}: IProductCodeInputProps) => {
  const { setError, clearErrors } = useFormContext();
  const [t] = useTranslation();

  const [loading, setLoading] = useState(false);
  const [isCheck, setIsCheck] = useState<boolean | null>(null);
  const valuePrev = useRef<string>();

  useEffect(() => {
    if (codePre) {
      valuePrev.current = codePre ?? '';
    }
  }, [codePre]);

  const onBlurProductCode = (e: any) => {
    if (valuePrev.current === e?.target?.value) {
      return;
    }
    setLoading(true);
    valuePrev.current = e?.target?.value;
    if (onCheckExit?.(e?.target?.value ?? '')) {
      setError(name, {
        type: 'custom',
        message: t('product_code_is_exit'),
      });
      setIsCheck(false);
    } else {
      clearErrors(name);
      setIsCheck(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  const InputProps = useMemo(() => {
    let icon = null;
    if (loading === true) {
      icon = <CircularProgress color="primary" />;
    }
    if (loading === false && isCheck === true) {
      icon = <Check color="success" />;
    }

    if (loading === false && isCheck === false) {
      icon = <CloseIcon color="error" />;
    }

    return {
      endAdornment: icon,
      onBlur: onBlurProductCode,
    };
  }, [loading]);

  return (
    <TextFieldElement
      fullWidth
      id="productCode"
      sx={{ marginBottom: 4 }}
      name={name}
      label={t('product_code')}
      placeholder={t('enter_your_product_code')}
      InputLabelProps={{
        shrink: true,
      }}
      disabled={isDisable}
      InputProps={InputProps}
      required
    />
  );
};

export default ProductCodeInput;
