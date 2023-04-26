import { useState } from 'react';
import { IconButton, styled } from '@mui/material';
import Menu from 'mdi-material-ui/Menu';
import { NavLink } from 'src/layouts/types';
import NextLink from '../NextLink';

const NavStyled = styled('nav')(({ theme }) => ({
  height: theme.spacing(16),
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  position: 'fixed',
}));

const MenuStyled = styled('ul')(({ theme }) => ({
  float: 'right',
  marginRight: theme.spacing(5),
  '@media (max-width: 858px)': {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    background: '#2c3e50',
    top: theme.spacing(16),
    left: '-100%',
    textAlign: 'center',
    transition: 'all .5s',
  },
}));

const MenuItemStyled = styled('li')(({ theme }) => ({
  display: 'inline-block',
  lineHeight: theme.spacing(16),
  margin: `0 ${theme.spacing(2.25)}`,
  '@media (max-width:952px)': {
    fontSize: '16px',
    paddingLeft: theme.spacing(12.5),
  },
  '@media (max-width: 858px)': {
    display: 'block',
  },
}));

const LogoStyled = styled('label')(({ theme }) => ({
  color: theme.palette.background.paper,
  fontSize: '35px',
  lineHeight: theme.spacing(16),
  padding: `0 ${theme.spacing(25)}`,
  '@media (max-width:952px)': {
    fontSize: '30px',
    paddingLeft: theme.spacing(12.5),
  },
}));

const ButtonStyled = styled('label')(({ theme }) => ({
  fontSize: '30px',
  color: theme.palette.background.paper,
  float: 'right',
  lineHeight: theme.spacing(16),
  marginRight: theme.spacing(8),
}));

const NextLinkStyled = styled(NextLink)(({ theme }) => ({
  color: theme.palette.background.paper,
  fontSize: '17px',
  borderRadius: theme.spacing(1),
  padding: `${theme.spacing(1.75)} ${theme.spacing(2.5)}`,
  textTransform: 'uppercase',
  ':hover': {
    backgroundColor: theme.palette.info.light,
    transition: '.5s',
  },
  '&.active': {
    backgroundColor: theme.palette.info.light,
    transition: '.5s',
  },
  '@media (max-width: 858px)': {
    ':hover': {
      backgroundColor: 'none',
      color: '#2c3e50',
    },
    '&.active': {
      backgroundColor: 'none',
      color: '#2c3e50',
    },
  },
}));

const MenuAppBarComponent = ({
  navigation,
  hidden,
}: {
  navigation: NavLink[];
  hidden: boolean;
}) => {
  // ** Hook
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <NavStyled>
      {hidden && (
        <ButtonStyled>
          <IconButton color="inherit" onClick={handleOpenMenu}>
            <Menu />
          </IconButton>
        </ButtonStyled>
      )}
      <LogoStyled>Design X</LogoStyled>
      <MenuStyled
        sx={{
          '@media (max-width: 858px)': {
            left: openMenu ? '0' : '-100%',
          },
        }}
      >
        {navigation?.map((item: NavLink, index) => {
          return (
            <MenuItemStyled key={item?.title}>
              <NextLinkStyled
                className={index === 0 ? 'active' : ''}
                href={item?.path ?? '/'}
              >
                {item?.title}
              </NextLinkStyled>
            </MenuItemStyled>
          );
        })}
      </MenuStyled>
    </NavStyled>
  );
};

export default MenuAppBarComponent;
