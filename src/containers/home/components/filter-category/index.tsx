import { Box, IconButton, styled } from '@mui/material';

const FilterContainer = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: theme.spacing(15.5),
  backgroundColor: theme.palette.background.paper,

  '@media (max-width: 858px)': {
    zIndex: -9,
  },
}));

const CategoryHeadStyled = styled(Box)(({ theme }) => ({
  margin: `${theme.spacing(7.5)} 0`,
}));

const CategoriesStyled = styled('ul')(({ theme }) => ({
  listStyleType: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
}));

const CategoryTitleStyled = styled(Box)(({ theme }) => ({
  flex: `0 0 calc(16.667% - 10px)`,
  display: ' flex',
  justifyContent: 'center',
  backgroundColor: '#a8a8a8',
  padding: theme.spacing(3),
  color: theme.palette.background.paper,
  margin: theme.spacing(1.25),
  cursor: 'pointer',
  transition: '0.4s all ease',
  ':hover': {
    backgroundColor: theme.palette.error.main,
    opacity: 0.7,
  },
  '&.active': {
    backgroundColor: theme.palette.error.main,
    transition: '.5s',
  },
}));

const CategoryItemStyled = styled('li')(({ theme }) => ({
  padding: `0 ${theme.spacing(2.5)}`,
  position: 'relative',
}));

const CategoryIconStyled = styled('span')(({ theme }) => ({}));

export interface ICategory {
  title: string;
  icon: string | JSX.Element;
}
const FilterCategoryComponent = ({
  categories,
}: {
  categories: ICategory[];
}) => {
  if (!categories?.length) {
    return <Box />;
  }

  return (
    <FilterContainer>
      <CategoryHeadStyled>
        <CategoriesStyled>
          {categories?.map((category, index) => {
            return (
              <CategoryTitleStyled
                className={index === 0 ? 'active' : ''}
                key={category?.title ?? ''}
              >
                <CategoryItemStyled>{category?.title ?? ''}</CategoryItemStyled>
                <CategoryIconStyled>
                  <IconButton
                    sx={{
                      padding: 0,
                      color: (theme) => theme.palette.background.paper,
                    }}
                  >
                    {category?.icon}
                  </IconButton>
                </CategoryIconStyled>
              </CategoryTitleStyled>
            );
          })}
        </CategoriesStyled>
      </CategoryHeadStyled>
    </FilterContainer>
  );
};

export default FilterCategoryComponent;
