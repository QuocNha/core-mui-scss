import React, { memo, useMemo, useState } from 'react';
import { TextFieldElement } from 'react-hook-form-mui';
import { equals } from 'rambda';
import { useTranslation } from 'react-i18next';
import { LoginFormEnum } from 'src/containers/login';

const InputEmail = () => {
  const { t } = useTranslation();

  // ** State
  const [isLoading, setIsLoading] = useState(false);

  const onBlur = async () => {
    //  when change type, auto call on blur so we must have condition userName?.length >1
  };

  const labelEmail = useMemo(() => {
    return `${t('email')}`;
  }, []);

  const inputPropsContent = () => {
    const rightIcon = null;
    const InputProps = {
      onBlur,
      endAdornment: rightIcon,
    };
    const inputProps = {
      overwrite: false,
    };

    return (
      <TextFieldElement
        fullWidth
        id="email"
        autoFocus
        sx={{ marginBottom: 8 }}
        label={labelEmail}
        placeholder={t('enter_your_$field', { field: t('email') })}
        InputLabelProps={{
          shrink: true,
        }}
        name={LoginFormEnum.email}
        InputProps={InputProps}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        inputProps={inputProps}
        disabled={isLoading}
      />
    );
  };

  return inputPropsContent();
};

export default memo(InputEmail, equals);
