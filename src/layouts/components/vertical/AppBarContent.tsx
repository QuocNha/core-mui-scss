import * as React from 'react';
// ** MUI Imports
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, Theme } from '@mui/material/styles';

// ** Components

import { BoxProps, Divider } from '@mui/material';

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu';

interface Props {
  hidden: boolean;
  toggleNavVisibility: () => void;
}
const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, toggleNavVisibility } = props;

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  // ** Styled Components
  const LanguageStyled = styled(Box)<BoxProps>(({ theme }) => ({
    '& .MuiFormLabel-root': {
      display: 'none',
    },
    '& fieldset.MuiOutlinedInput-notchedOutline': {
      maxHeight: theme.spacing(9),
      top: 0,

      legend: {
        display: 'none',
      },
    },
    '& .MuiInputBase-root': {
      maxHeight: theme.spacing(9),
    },
    '& .MuiAutocomplete-input': {
      padding: '0 !important',
      height: 'auto',
      fontSize: theme.spacing(3.5),
      lineHeight: 1,
    },
  }));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        className="actions-left"
        sx={{ mr: 2, display: 'flex', alignItems: 'center' }}
      >
        {hidden ? (
          <IconButton
            color="inherit"
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
      </Box>
      <Box
        className="actions-right"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Divider
          sx={{
            borderColor: 'common.white',
            marginLeft: 2,
            marginRight: 2,
            height: (theme) => theme.spacing(8),
            width: (theme) => theme.spacing(0.25),
            opacity: 0.5,
          }}
          orientation="vertical"
          variant="middle"
          flexItem
        />

        {/* Notification  */}
        {/* <NotificationDropdown /> */}

        {/* User information */}
        {/* <UserDropdown /> */}
      </Box>
    </Box>
  );
};

export default AppBarContent;
