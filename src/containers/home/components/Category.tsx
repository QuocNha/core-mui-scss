import { Box, Typography, styled } from '@mui/material';
import { Image } from 'src/components/shared-components/Image';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import WifiSharpIcon from '@mui/icons-material/WifiSharp';

const CartStyled = styled('div')(({ theme }) => ({
  borderRadius: theme.spacing(5),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 7px 29px 0px rgb(0 0 0 / 12%)',
  width: `calc(25% - ${theme.spacing(7.5)})`,
  marginLeft: theme.spacing(7.5),
  marginBottom: theme.spacing(7.5),
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
  width: '100%',
  height: theme.spacing(50),
  objectFit: 'cover',
  flexShrink: 0,
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
  paddingLeft: theme.spacing(6.25),
  flex: 1,
}));

const CartUserTopStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(0.25),
}));

const CartUserNameStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: 1,
}));

const CartUserIconStyled = styled(CheckCircleSharpIcon)(({ theme }) => ({
  color: '#20e3b2',
  marginLeft: theme.spacing(1.25),
}));

const CartUserGameStyled = styled(Box)(({ theme }) => ({
  color: '#999',
  fontWeight: 300,
  fontSize: '13px',
  marginTop: 'auto',
  flexShrink: 0,
}));

const CartBottomStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.25),
  borderTop: `1px solid #eee`,
  display: ' flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 'auto',
  flexShrink: 0,
}));

const CartLiveStyled = styled(Box)(({ theme }) => ({
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.spacing(2),
  backgroundColor: '#ff6651',
  padding: '5px 15px',
}));

const CartWatchingStyled = styled(Box)(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 300,
  color: '#999',
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
  item: ICardItem;
}

const Category = ({ item }: ICardComponentProps) => {
  return (
    <CartStyled key={item?.name}>
      <CartImageStyled
        src={item?.src}
        defaultSrc="/images/avatar_default.svg"
        alt={item?.name}
        height={40}
        width={40}
      />
      <CartContentStyled>
        <CartContentTopStyled>
          <CartTitleStyled>{item?.title}</CartTitleStyled>
          <CartUserStyled>
            <CartAvatarStyled
              src={item?.user?.avatar ?? ''}
              defaultSrc="/images/avatar_default.svg"
              alt={item?.user?.name ?? ''}
              height={10}
              width={10}
            />
            <CartInfoStyled>
              <CartUserTopStyled>
                <CartUserNameStyled>
                  {item?.user?.name ?? ''}
                </CartUserNameStyled>
                <CartUserIconStyled />
              </CartUserTopStyled>
              <CartUserGameStyled> Call of duty</CartUserGameStyled>
            </CartInfoStyled>
          </CartUserStyled>
        </CartContentTopStyled>
        <CartBottomStyled>
          <CartLiveStyled>
            <WifiSharpIcon />
            <span>Live</span>
          </CartLiveStyled>
          <CartWatchingStyled>4.2k watching</CartWatchingStyled>
        </CartBottomStyled>
      </CartContentStyled>
    </CartStyled>
  );
};
export default Category;
