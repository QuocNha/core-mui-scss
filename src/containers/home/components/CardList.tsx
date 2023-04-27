import { Box, styled } from '@mui/material';
import CardComponent, { ICardItem } from './Card';

interface ICardListProps {
  list: ICardItem[];
}

const CardListStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  marginLeft: -theme.spacing(7.5),
  '@media (max-width:767px)': {
    flexDirection: 'column',
    marginLeft: `-${theme.spacing(4.25)}`,
  },
}));

const CardListComponent = ({ list }: ICardListProps) => {
  return (
    <CardListStyled>
      {list?.map((item) => {
        return <CardComponent key={item?.name} item={item} />;
      })}
    </CardListStyled>
  );
};

export default CardListComponent;
