import { useCallback } from 'react';
import { styled } from '@mui/material';
import { IProduct } from 'src/types';
import Category from './Category';
import CategoryByList from './CategoryByList';
import { TypeProductListEnum } from '..';

interface ICardListProps {
  list: IProduct[];
  typeProductList: TypeProductListEnum;
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

const CategoryList = ({ list, typeProductList }: ICardListProps) => {
  const renderCategory = useCallback(
    (item: IProduct) => {
      if (typeProductList === TypeProductListEnum.list) {
        return <CategoryByList key={item?.name} item={item} />;
      }
      return <Category key={item?.name} item={item} />;
    },
    [list, typeProductList]
  );

  return (
    <CardListStyled>
      {list?.map((item) => {
        return renderCategory(item);
      })}
    </CardListStyled>
  );
};

export default CategoryList;
