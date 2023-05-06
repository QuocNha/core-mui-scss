import { Box, Stack, Typography, styled } from '@mui/material';
import Phone from 'mdi-material-ui/Phone';
import MapMarker from 'mdi-material-ui/MapMarker';

const CardInfoStyled = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '0',
  maxWidth: '50%',
  color: 'white',
  background: 'transparent',
  '@media (max-width: 1023.98px)': {
    position: 'relative',
    maxWidth: '100%',
    margin: '20px 15px',
    color: '#5e5873',
    background: '#fff',
    borderRadius: '6px',
    boxShadow: '0 4px 20px rgba(0,0,0,.08)',
  },
  '@media (max-width: 576px)': {
    margin: '-100px 15px 1.25rem',
  },
}));

const CardHeaderStyled = styled(Box)(({ theme }) => ({
  marginBottom: '-1px',
  padding: '0 24px',
  minHeight: '48px',
  color: 'white',
  background: 'transparent',
  borderRadius: '2px 2px 0 0',
  '@media (max-width: 1023.98px)': {
    color: '#5e5873',
  },
  '@media (max-width: 576px)': {
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '0',
    paddingRight: '0',
  },
}));

const CardHeaderWrapperStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const CardHeaderTitleStyled = styled(Box)(({ theme }) => ({
  padding: '0',
  overflow: 'initial',
  fontSize: theme.spacing(6),
  color: theme.palette.background.paper,
  paddingLeft: `${theme.spacing(6)}`,
  '@media (max-width: 1023.98px)': {
    color: '#5e5873',
    padding: `${theme.spacing(5)} ${theme.spacing(5)} ${theme.spacing(
      2.5
    )} ${theme.spacing(2.5)}`,
  },
  '@media (max-width: 576px)': {
    fontSize: theme.spacing(4),
    padding: `${theme.spacing(2.5)} ${theme.spacing(5)} `,
  },
}));

const CardHeaderBodyStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: `${theme.spacing(0)} ${theme.spacing(6)} ${theme.spacing(
    6
  )} ${theme.spacing(6)}`,
  '::before': {
    display: 'table',
    content: '""',
  },
  '::after': {
    boxSizing: 'border-box',
  },
  '@media (max-width: 1023.98px)': {
    color: '#5e5873',
    padding: `${theme.spacing(0)} ${theme.spacing(5)} ${theme.spacing(
      2.5
    )} ${theme.spacing(2.5)}`,
  },
  '@media (max-width: 576px)': {
    minHeight: '44px',
    padding: `${theme.spacing(0)} ${theme.spacing(5)} `,
  },
}));

const CardBodyInfoStyled = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: theme.spacing(2),
  gap: theme.spacing(2),
  '@media (max-width: 576px)': {
    flexDirection: 'column',
  },
}));

const TypographyJobStyled = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(4),
  color: theme.palette.background.paper,
  '@media (max-width: 1023.98px)': {
    color: '#5e5873',
  },
  '@media (max-width: 576px)': {
    fontSize: theme.spacing(3),
  },
}));

const TypographyPhoneStyled = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(4),
  color: theme.palette.background.paper,
  '@media (max-width: 1023.98px)': {
    color: '#5e5873',
  },
  '@media (max-width: 576px)': {
    fontSize: theme.spacing(3),
  },
}));

const TypographyAddressStyled = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(4),
  color: theme.palette.background.paper,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxWidth: theme.spacing(80),
  '@media (max-width: 1023.98px)': {
    color: '#5e5873',
    maxWidth: theme.spacing(120),
  },
  '@media (max-width: 576px)': {
    fontSize: theme.spacing(3),
  },
}));

const InfoAppBarComponent = () => {
  return (
    <CardInfoStyled>
      <CardHeaderStyled>
        <CardHeaderWrapperStyled>
          <CardHeaderTitleStyled>Đặng Quốc Nhã</CardHeaderTitleStyled>
          <CardHeaderBodyStyled>
            <TypographyJobStyled>ReactJS Developer</TypographyJobStyled>
            <CardBodyInfoStyled>
              <Stack flexDirection="row">
                <Phone
                  sx={{
                    color: (theme) => theme.palette.background.paper,
                    '@media (max-width: 1023.98px)': {
                      color: '#5e5873',
                    },
                    '@media (max-width: 574px)': {
                      fontSize: (theme) => theme.spacing(4),
                    },
                  }}
                />
                <TypographyPhoneStyled
                  sx={{
                    paddingLeft: (theme) => theme.spacing(4),
                  }}
                >
                  0866085734
                </TypographyPhoneStyled>
              </Stack>
              <Stack flexDirection="row">
                <MapMarker
                  sx={{
                    color: (theme) => theme.palette.background.paper,
                    '@media (max-width: 1023.98px)': {
                      color: '#5e5873',
                    },
                    '@media (max-width: 574px)': {
                      fontSize: (theme) => theme.spacing(4),
                    },
                  }}
                />
                <TypographyAddressStyled
                  sx={{ paddingLeft: (theme) => theme.spacing(4) }}
                >
                  134A, Ly Phuc Man, District 7, HCM City 134A
                </TypographyAddressStyled>
              </Stack>
            </CardBodyInfoStyled>
          </CardHeaderBodyStyled>
        </CardHeaderWrapperStyled>
      </CardHeaderStyled>
    </CardInfoStyled>
  );
};

export default InfoAppBarComponent;
