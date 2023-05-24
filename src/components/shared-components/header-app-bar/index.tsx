import { Box, styled } from '@mui/material';

const HeaderImageStyled = styled(Box)(({ theme }) => ({
  height: '406px',
  width: '100%',
  '@media (max-width: 1200px)': {
    height: '280px',
  },
  '@media (max-width: 576px)': {
    height: '180px',
    position: 'relative',
  },
}));

const HeaderAppBarComponent = () => {
  return (
    <HeaderImageStyled
      style={{
        backgroundImage:
          'url(https://imageio.forbes.com/blogs-images/davidphelan/files/2017/03/IMG_1566-1200x800.jpg?format=jpg&width=1200)',

        backgroundSize: 'cover',
      }}
    />
  );
};

export default HeaderAppBarComponent;
