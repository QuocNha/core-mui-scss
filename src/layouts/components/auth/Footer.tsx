// React Imports
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
// ** MUI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'left',
  '& .MuiTypography-root': {
    lineHeight: theme.spacing(5.5),
  },
}));

const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid
          item
          xs="auto"
          sx={{
            mx: 'auto',
            pl: '0 !important',
            pr: theme.spacing(1),
          }}
        >
          <Item sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '.85rem',
                ml: theme.spacing(4),
              }}
            >
              dangquocnhait@gmail.com@
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
