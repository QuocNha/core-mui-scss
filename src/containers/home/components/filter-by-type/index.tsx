import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  styled,
} from '@mui/material';

const FilterWrapper = styled('div')(({ theme }) => ({
  flex: '20%',
  '@media (max-width:767px)': {
    flex: '100%',
  },
}));

const FormGroupStyle = styled(FormGroup)(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1.5),
}));

const FormControlLabelStyle = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiTypography-root': {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth: theme.spacing(30),
  },
}));

const CheckBoxContainer = styled('div')(({ theme }) => ({}));

export interface IFilterByType {
  id: string;
  name: string;
}

interface IFilterByTypeProps {
  filters: IFilterByType[];
}
const FilterByType = ({ filters }: IFilterByTypeProps) => {
  return (
    <FilterWrapper>
      <Typography
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          padding: (theme) => theme.spacing(2),
          borderRadius: (theme) => theme.spacing(1.5),
        }}
        variant="h4"
      >
        Filter
      </Typography>
      <CheckBoxContainer>
        <FormGroupStyle>
          {filters.map((item, index) => {
            return (
              <FormControlLabelStyle
                key={item?.id}
                control={<Checkbox defaultChecked={!!(index === 0)} />}
                label={item?.name}
              />
            );
          })}
        </FormGroupStyle>
      </CheckBoxContainer>
    </FilterWrapper>
  );
};

export default FilterByType;
