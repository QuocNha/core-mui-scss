import { Box, Stack, Typography, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IProduct } from './mockData';
import { ProductCell } from './table/ProductCell';
import ActionsCell from './table/ActionsCell';

const CartStyled = styled('div')(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 7px 29px 0px rgb(0 0 0 / 12%)',
  width: `calc(100% - ${theme.spacing(7.5)})`,
  marginLeft: theme.spacing(7.5),
  marginBottom: theme.spacing(2.5),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

const CartContentStyled = styled(Box)(({ theme }) => ({
  height: `calc(100% -200px)`,
  display: 'flex',
  justifyContent: 'space-between',
  flex: 1,
  gap: theme.spacing(10),
  '@media (max-width:767px)': {
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
}));

const CartContentTopStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.25),
  flexDirection: 'column',
  flex: 1,
}));

const CartItemRowStyled = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  '@media (max-width:767px)': {
    flexDirection: 'column',
  },
}));
const CartTitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  wordBreak: 'break-all',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxHeight: '100px',
  whiteSpace: 'pre-wrap',
  opacity: '0.5',
  marginLeft: theme.spacing(1.25),
}));

const CartBottomStyled = styled(Box)(({ theme }) => ({
  display: ' flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexShrink: 0,
}));

export interface IUser {
  avatar?: string;
  name?: string;
}
export interface ICardItem {
  name?: string;
  src?: string;
  title?: string;
  user?: IUser;
}

interface ICardComponentProps {
  item: IProduct;
}

const CategoryByList = ({ item }: ICardComponentProps) => {
  const { t } = useTranslation();

  return (
    <CartStyled key={item?.name}>
      <ProductCell name={item?.name} picture={item?.src} />
      <CartContentStyled>
        <CartContentTopStyled>
          <CartItemRowStyled alignItems={'center'}>
            <Typography sx={{ maxWidth: '100px' }}>{t('action')}:</Typography>
            <ActionsCell params={item} />
          </CartItemRowStyled>
          <CartItemRowStyled>
            <Typography sx={{ maxWidth: '100px' }}>{t('price')}:</Typography>
            <CartTitleStyled>
              {item?.price} {t('type_price')}
            </CartTitleStyled>
          </CartItemRowStyled>
          <CartItemRowStyled flexDirection="row">
            <Typography sx={{ maxWidth: '100px' }}>
              {t('create_at')}:
            </Typography>
            <CartTitleStyled>{item?.createAt}</CartTitleStyled>
          </CartItemRowStyled>
          <CartItemRowStyled flexDirection="row">
            <Typography sx={{ maxWidth: '100px' }}>
              {t('description')}:{' '}
            </Typography>
            <CartTitleStyled>{item?.description}</CartTitleStyled>
          </CartItemRowStyled>
        </CartContentTopStyled>
      </CartContentStyled>
    </CartStyled>
  );
};
export default CategoryByList;
