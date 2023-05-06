import { Box, styled } from '@mui/material';

const HeaderImageStyled = styled(Box)(({ theme }) => ({
  height: '406px',
  width: '100%',
  '@media (max-width: 1200px)': {
    height: '280px',
  },
  '@media (max-width: 576px)': {
    height: '180px',
  },
}));

const HeaderAppBarComponent = () => {
  return (
    <HeaderImageStyled
      style={{
        backgroundImage:
          'url(https://oda-link-s3-production.s3.amazonaws.com/supplier_cover/6ce4625ba88ae81081202113e193817c)',

        backgroundSize: 'cover',
      }}
    />
  );
};

export default HeaderAppBarComponent;
