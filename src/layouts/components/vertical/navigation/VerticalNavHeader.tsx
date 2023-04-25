// ** React Import
import React, { ReactNode } from 'react';

// ** Next Import
import Link from 'next/link';

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

// // // ** Type Import
import { Settings } from 'src/context/settingsContext';

interface Props {
  /* eslint-disable */
  hidden: boolean;
  settings: Settings;
  toggleNavVisibility: () => void;
  saveSettings: (values: Settings) => void;
  verticalNavMenuBranding?: (props?: any) => ReactNode;
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight,
  backgroundColor: theme.palette.common.white,
}));

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out',
}));

const StyledLink = styled('a')(({ theme }) => ({
  display: 'flex',
  fontSize: theme.spacing(4),
  alignItems: 'center',
  textDecoration: 'none',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
  paddingRight: 0,
}));

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props;

  // ** Hooks
  const theme = useTheme();

  return (
    <MenuHeaderWrapper className="nav-header">
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href="/">
          <StyledLink>
            <img src={``} />

            {/* <HeaderTitle variant="h6" sx={{ ml: 3 }}>
              {themeConfig.templateName}
            </HeaderTitle> */}
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  );
};

export default VerticalNavHeader;
