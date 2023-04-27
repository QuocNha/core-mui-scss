// ** React Imports
import { ReactNode } from 'react';

// ** MUI Imports
import { Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowUp from 'mdi-material-ui/ArrowUp';
import { Box, Fab } from '@mui/material';

// ** Layout Imports
// ** Component Import

import ScrollToTop from 'src/components/shared-components/scroll-to-top';

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
      <ScrollToTop className="mui-fixed">
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <ArrowUp />
        </Fab>
      </ScrollToTop>
    </Box>
  );
};

export default UserLayout;
