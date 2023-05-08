import { Box, styled } from '@mui/material';
import Category, { ICardItem } from './Category';

interface ICardListProps {
  list: ICardItem[];
}

const CardListStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  flex: '80%',
  marginLeft: -theme.spacing(7.5),
  '@media (max-width:767px)': {
    flexDirection: 'column',
    marginLeft: `-${theme.spacing(4.25)}`,
    flex: '100%',
  },
}));

const CategoryList = ({ list }: ICardListProps) => {
  return (
    <CardListStyled>
      {list?.map((item) => {
        return <Category key={item?.name} item={item} />;
      })}
    </CardListStyled>
  );
};

export default CategoryList;
