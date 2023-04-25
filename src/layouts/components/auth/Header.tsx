// ** React Imports

// ** MUI Imports
import { BoxProps } from '@mui/material';

import Box from '@mui/material/Box';

import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const LanguageStyled = styled(Box)<BoxProps>(({ theme }) => ({
  '& .MuiFormLabel-root': {
    display: 'none',
  },
  '& fieldset.MuiOutlinedInput-notchedOutline': {
    maxHeight: theme.spacing(9),
    top: 0,
    color: 'white',

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

const Header = () => {
  const { t, i18n } = useTranslation();

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        padding: theme.spacing(4),
        flexGrow: 1,
        position: 'fixed',
        top: 0,
        zIndex: 10,
        [theme.breakpoints.down('md')]: {
          position: 'relative',
        },
      }}
    >
      <Box sx={{ width: '100%', textAlign: 'right', color: 'white' }}></Box>
    </Box>
  );
};

export default Header;
