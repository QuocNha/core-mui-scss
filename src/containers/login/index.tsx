// ** React Imports
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { isEmpty } from 'rambda';

import { styled, useTheme } from '@mui/material/styles';

// import Loading from 'src/components/shared-components/loading';
import { useState } from 'react';
// import { useAuth } from 'state/auth/AuthContext';
// ** MUI Components
import Box, { BoxProps } from '@mui/material/Box';
import { yupResolver } from '@hookform/resolvers/yup';
import MuiCard, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { customRuleEmail, customRulePassword } from 'src/utils/form';
import { Button, Typography } from '@mui/material';
import { FormContainer, useForm, useFormState } from 'react-hook-form-mui';
import { useAuth } from 'src/context/auth';
import InputEmail from './components/inputs/Email';
import InputPassword from './components/inputs/Password';

export enum LoginFormEnum {
  password = 'password',
  email = 'email',
}
export type LoginForm = Record<LoginFormEnum, string>;

export enum UserNameInputTypeEnum {
  name = 'name',
  phone = 'phone',
}

const BackgroundRandomStyled = styled(Box)<BoxProps>(() => ({
  display: 'block',
  height: '100%',
  overflow: 'hidden',
  position: 'fixed',
  width: '100%',
  zIndex: -1,
}));

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  borderRadius: '1rem',
  [theme.breakpoints.up('sm')]: { width: theme.spacing(112) },
  [theme.breakpoints.up('lg')]: { width: theme.spacing(146) },
}));

const ButtonSubmit = ({ loading }: { loading: boolean }) => {
  const state = useFormState();
  const { t } = useTranslation();

  return (
    <Button
      fullWidth
      size="large"
      variant="contained"
      color="primary"
      sx={{
        mt: 8,
        mb: 0,
        textTransform: 'none',
        fontSize: '1.125rem',
        fontWeight: 500,
      }}
      type="submit"
      disabled={!state.isValid || loading}
    >
      {t('sign_in')}
    </Button>
  );
};

const LoginComponent = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formContext = useForm<LoginForm>({
    defaultValues: {},
    resolver: (data, context, options) => {
      return yupResolver(
        yup.object().shape({
          password: customRulePassword({ name: t('password') }),
          email: customRuleEmail({ name: t('email') }),
        })
      )(data, context, options);
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(!isLoading);
    // await login(
    //   {
    //     ...data,
    //   },
    //   () => {
    //     setIsLoading(false);
    //   },
    //   () => {
    //     setIsLoading(false);
    //   }
    // );
    login(
      {
        ...data,
      },
      () => {
        setIsLoading(false);
      },
      () => {
        setIsLoading(false);
      }
    );
  };

  return (
    <>
      <BackgroundRandomStyled>
        {/* <img src={`${backgroundODA.src}`} alt="" /> */}
      </BackgroundRandomStyled>
      <Box className="content-center">
        <Card sx={{ zIndex: 1 }}>
          {/* {isLoading && <Loading />} */}

          <CardContent
            sx={{
              padding: (themePadding) => `${themePadding.spacing(8)}`,
            }}
          >
            <Box
              sx={{
                mb: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                style={{
                  fontWeight: 500,
                  marginBottom: 2,
                  fontSize: theme.spacing(12.5),
                }}
              >
                {t('login')}
              </Typography>
            </Box>
            <Box sx={{ mb: 12 }}>
              <FormContainer onSuccess={onSubmit} formContext={formContext}>
                <InputEmail />

                <InputPassword />

                <ButtonSubmit loading={isLoading} />
              </FormContainer>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default LoginComponent;
