import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

// Styled component for Login Layout component
const BLUE_COLOR = '#2196F3';
const LoginLayoutWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  '& .content-center': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(8),
  },

  '.layout-footer': {
    '.MuiGrid-item': {
      p: {
        margin: 0,
      },
    },
  },
  '.footer-divider-vertical': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    '.MuiDivider-vertical': {
      margin: 'auto 0',
      flexShrink: 0,
      borderWidth: '0px thin 0px 0px',
      borderStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.12)',
      height: theme.spacing(6),
      alignSelf: 'stretch',
    },
    a: {
      padding: theme.spacing(0, 2),
      color: { BLUE_COLOR },
    },
  },
  '.field-locales': {
    maxWidth: theme.spacing(25),
  },
  '.auth-content': {
    overflowX: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    display: 'flex',
    paddingBottom: theme.spacing(19),
    minHeight: `100vh`,
    [`@media screen and (min-width: 1200px) and (min-height: 840px)`]: {
      minHeight: `100vh`,
    },
  },
}));

export type LoginLayoutProps = {
  children: ReactNode;
};

const LoginLayout = ({ children }: LoginLayoutProps) => (
  <LoginLayoutWrapper className="un-auth-layout-wrapper">
    <Box className="auth-content">{children}</Box>
  </LoginLayoutWrapper>
);

export default LoginLayout;
