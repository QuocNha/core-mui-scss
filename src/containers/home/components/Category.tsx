import { Box, Typography, styled } from '@mui/material';
import { Image } from 'src/components/shared-components/Image';
import WifiSharpIcon from '@mui/icons-material/WifiSharp';
import { useTranslation } from 'react-i18next';
import { IProduct } from './mockData';
import ActionsCell from './ActionsCell';

const CartStyled = styled('div')(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  borderRadius: theme.spacing(5),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 7px 29px 0px rgb(0 0 0 / 12%)',
  width: `calc(25% - ${theme.spacing(7.5)})`,
  marginLeft: theme.spacing(7.5),
  marginBottom: theme.spacing(7.5),
  '@media (max-width:1000px)': {
    flexDirection: 'column',
    width: `calc(50% - ${theme.spacing(4.25)})`,
    marginLeft: theme.spacing(4.25),
  },
  '@media (max-width:767px)': {
    flexDirection: 'column',
    width: `calc(100% - ${theme.spacing(4.25)})`,
    marginLeft: theme.spacing(4.25),
  },
}));

const CartContentStyled = styled(Box)(({ theme }) => ({
  height: `calc(100% -200px)`,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}));

const CartContentTopStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6.25),
  flexDirection: 'column',
  flex: 1,
}));

const CartImageStyled = styled(Image)(({ theme }) => ({
  width: '80%',
  height: theme.spacing(50),
  objectFit: 'contain',
  flexShrink: 0,
  alignItems: 'center',
}));

const CartTileStyled = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
  textTransform: 'uppercase',
  fontSize: '13px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.paper,
  padding: theme.spacing(1.25),
}));

const CartActionStyled = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: '5px',
  right: '20px',
  textTransform: 'uppercase',
  fontSize: '13px',
  color: theme.palette.background.paper,
  padding: theme.spacing(1.25),
}));

const CartTitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginBottom: theme.spacing(6.25),
  wordBreak: 'break-all',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxHeight: '100px',
  whiteSpace: 'pre-wrap',
}));

const CartUserStyled = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const CartAvatarStyled = styled(Image)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  borderRadius: '100%',
  flexShrink: 0,
  objectFit: 'cover',
}));

const CartInfoStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
}));

const CartUserTopStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: theme.spacing(0.25),
  gap: theme.spacing(4),
}));

const CartUserNameStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: 1,
}));

const CartUserGameStyled = styled(Box)(({ theme }) => ({
  color: '#999',
  fontWeight: 300,
  fontSize: '13px',
  marginTop: 'auto',
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

const Category = ({ item }: ICardComponentProps) => {
  const { t } = useTranslation();

  return (
    <CartStyled key={item?.name}>
      <CartImageStyled
        src={item?.src}
        defaultSrc="/images/avatar_default.svg"
        alt={item?.name}
        height={40}
        width={40}
      />
      <CartTileStyled>{item?.name ?? ''}</CartTileStyled>
      <CartActionStyled>
        <ActionsCell params={item} />
      </CartActionStyled>

      <CartContentStyled>
        <CartContentTopStyled>
          <CartTitleStyled>{item?.description}</CartTitleStyled>
          <CartUserStyled>
            <CartInfoStyled>
              <CartUserTopStyled>
                <Typography>{t('create_at')}:</Typography>
                <CartUserNameStyled>{item?.createAt ?? ''}</CartUserNameStyled>
              </CartUserTopStyled>
              <CartUserTopStyled>
                <Typography>{t('price')}:</Typography>
                <CartUserNameStyled>
                  {item?.price} {t('type_price')}
                </CartUserNameStyled>
              </CartUserTopStyled>
            </CartInfoStyled>
          </CartUserStyled>
        </CartContentTopStyled>
      </CartContentStyled>
    </CartStyled>
  );
};
export default Category;
