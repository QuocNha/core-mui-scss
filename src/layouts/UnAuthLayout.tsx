// ** React Imports
import { ReactNode } from 'react';

// ** MUI Imports
import { Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ** Layout Imports
// !Do not remove this Layout import
import VerticalLayout from 'src/layouts/VerticalLayout';

// ** Component Import

import { useSettings } from 'src/hooks/useSettings';
import { Box } from '@mui/material';
import MenuAppBarComponent from 'src/components/shared-components/menu-app-bar';
import navigation from 'src/navigation/vertical';
import { NavLink } from './types';

// ** Hook Import

interface Props {
  children: ReactNode;
}

const UserLayout = ({ children }: Props) => {
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const theme = useTheme();
  return (
    <Box
      sx={{
        '*': {
          padding: theme.spacing(0),
          margin: theme.spacing(0),
          textDecoration: 'none',
          listStyle: 'none',
          boxSizing: 'border-box',
        },
      }}
    >
      <MenuAppBarComponent
        navigation={navigation() as NavLink[]}
        hidden={hidden}
      />
      <Box>{children}</Box>
    </Box>
  );
};

export default UserLayout;
