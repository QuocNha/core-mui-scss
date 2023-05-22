import { PasswordElement, useFormContext } from 'react-hook-form-mui';
import { useTranslation } from 'react-i18next';
import { LoginFormEnum } from 'src/containers/login';

const InputPassword = () => {
  const { t } = useTranslation();

  const { setValue, clearErrors, getValues } = useFormContext();

  const onBlurPassword = () => {
    const email = getValues(LoginFormEnum.email);
    if (!email) {
      clearErrors(LoginFormEnum.password);
      setValue(LoginFormEnum.password, undefined);
    }
  };

  return (
    <PasswordElement
      label={t('password')}
      fullWidth
      placeholder={t('enter_your_$field', { field: t('password') })}
      name={LoginFormEnum.password}
      id="auth-login-password"
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        onBlur: onBlurPassword,
      }}
    />
  );
};

export default InputPassword;
