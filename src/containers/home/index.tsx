import { ReactNode, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import UnAuthLayout from 'src/layouts/UnAuthLayout';
import CategoryList from './components/CategoryList';
import FilterCategoryComponent from './components/filter-category';
import FilterByType from './components/filter-by-type';
import { listCategory, listPrices, listProduct } from './components/mockdata';

const HomeWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
}));

const BodyContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
}));

const HomePage = () => {
  const products = useMemo(() => {
    return listProduct;
  }, [listProduct]);

  const categories = useMemo(() => {
    return listCategory;
  }, [listCategory]);

  const filterByPrices = useMemo(() => {
    return listPrices;
  }, [listCategory]);

  return (
    <HomeWrapper>
      <FilterCategoryComponent categories={categories ?? []} />
      <BodyContainer>
        <FilterByType filters={filterByPrices} />
        <CategoryList list={products ?? []} />
      </BodyContainer>
    </HomeWrapper>
  );
};

HomePage.getLayout = (page: ReactNode) => <UnAuthLayout>{page}</UnAuthLayout>;

export default HomePage;
