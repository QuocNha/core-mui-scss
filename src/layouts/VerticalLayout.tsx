// ** React Imports
import { useState } from 'react';

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ArrowUp from 'mdi-material-ui/ArrowUp';

// ** Icons Imports

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig';

// ** Type Import
import { LayoutProps } from 'src/layouts/types';

// ** Components
import DatePickerWrapper from 'src/styles/libs/react-datepicker';
import AppBar from './components/vertical/appBar';
import Navigation from './components/vertical/navigation';
import ScrollToTop from 'src/components/shared-components/scroll-to-top';
import { Fab } from '@mui/material';

// ** Styled Component

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex',
});

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
});

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(8, 6, 6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const VerticalLayout = (props: LayoutProps) => {
  // ** Props
  const { settings, children, verticalNavItems } = props;

  // ** Vars
  const { contentWidth } = settings;
  const navWidth = themeConfig.navigationSize;

  // ** States
  const [navVisible, setNavVisible] = useState<boolean>(true);

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible);

  return (
    <VerticalLayoutWrapper className="layout-wrapper">
      {/* Navigation Menu */}
      {verticalNavItems?.length && (
        <Navigation
          {...props}
          navWidth={navWidth}
          navVisible={navVisible}
          setNavVisible={setNavVisible}
          toggleNavVisibility={toggleNavVisibility}
        />
      )}

      <MainContentWrapper className="layout-content-wrapper">
        {/* AppBar Component */}
        <AppBar toggleNavVisibility={toggleNavVisibility} {...props} />

        {/* Content */}
        <ContentWrapper
          className="layout-page-content"
          sx={{
            ...(contentWidth === 'boxed' && {
              mx: 'auto',
              '@media (min-width:1440px)': { maxWidth: 1440 },
              '@media (min-width:1200px)': { maxWidth: '100%' },
            }),
          }}
        >
          {children}
        </ContentWrapper>

        {/* Footer Component */}

        {/* Portal for React Datepicker */}
        <DatePickerWrapper sx={{ zIndex: 11 }}>
          <Box id="react-datepicker-portal" />
        </DatePickerWrapper>

        <ScrollToTop className="mui-fixed">
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      </MainContentWrapper>
    </VerticalLayoutWrapper>
  );
};

export default VerticalLayout;
