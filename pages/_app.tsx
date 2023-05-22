// React
// ** Next Imports
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Router, useRouter } from 'next/router';

// ** Loader Import
/* eslint-disable */
import NProgress from 'nprogress';

// ** Emotion Imports
import type { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

// ** Config Imports
import themeConfig from 'src/configs/themeConfig';
import { useTheme } from '@mui/material/styles';

// ** Component Imports
import ThemeComponent from 'src/theme/ThemeComponent';

// ** Contexts
import {
  SettingsConsumer,
  SettingsProvider,
} from 'src/context/settingsContext';

// ** Utils Imports
import { createEmotionCache } from 'src/utils/create-emotion-cache';

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css';

// ** Global css styles
import 'src/styles/globals.css';

// Store
import { StoreWrapper } from 'src/store';
import { Provider } from 'react-redux';
// ** Language
import 'src/i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/i18n';
import { SnackbarProvider } from 'notistack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { AppDispatch } from 'src/store/app-dispatch';
import UnAuthLayout from 'src/layouts/UnAuthLayout';
import { useEffect, useState } from 'react';
import { AuthProvider, useAuth } from 'src/context/auth';
import { PATH } from 'src/constants';
import Loading from 'src/components/shared-components/Loading';

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
}

const unAuthRequired = ['login', 'register', 'forgot-password'];

const AppLayout = ({ Component, Element }: any) => {
  const authContext = useAuth();
  const router = useRouter();
  const isExits = unAuthRequired.find((x) => router.pathname.includes(x));

  if (!authContext?.userInformation?.email) {
    if (!isExits) {
      router.push(PATH.LOGIN).then();
    }
  } else {
    if (isExits) {
      router.push(PATH.INDEX).then();
    }
  }

  const children = Component?.getLayout ? (
    Component?.getLayout(Element)
  ) : (
    <UnAuthLayout>{Element}</UnAuthLayout>
  );
  return <div>{children}</div>;
};

// ** Configure JSS & ClassName
const App = ({ Component, ...rest }: ExtendedAppProps) => {
  const { store, props } = StoreWrapper.useWrappedStore(rest);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;
  const theme = useTheme();
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <SnackbarProvider
          iconVariant={{
            success: <CheckCircleOutlineIcon sx={{ mr: theme.spacing(1) }} />,
            error: <CancelOutlinedIcon sx={{ mr: theme.spacing(1) }} />,
          }}
          maxSnack={3}
        >
          <I18nextProvider i18n={i18n}>
            <CacheProvider value={emotionCache}>
              <SettingsProvider>
                <SettingsConsumer>
                  {({ settings }) => (
                    <ThemeComponent settings={settings}>
                      <AuthProvider>
                        <Loading />
                        <AppLayout
                          Element={<Component {...pageProps} />}
                          Component={Component}
                        />
                      </AuthProvider>
                      <AppDispatch />
                    </ThemeComponent>
                  )}
                </SettingsConsumer>
              </SettingsProvider>
            </CacheProvider>
          </I18nextProvider>
        </SnackbarProvider>
      </Provider>
    );
  }
};

export default App;
