import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  styled,
} from '@mui/material';

import Plus from 'mdi-material-ui/Plus';
import Minus from 'mdi-material-ui/Minus';
import NumberProductInput from './inputs/NumberProduct';

const ProductItemWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
}));

const ProductItem = () => {
  return (
    <ProductItemWrapper>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image="/images/avatar_default.svg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Product
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product Information
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
            <Button
              size="small"
              sx={{
                backgroundColor: '#f46a6a',
                color: (theme) => theme.palette.background.paper,
                height: '30px',

                ':hover': {
                  backgroundColor: '#f46a6a',
                },
              }}
            >
              <Plus />
            </Button>
            <NumberProductInput />
            <Button
              size="small"
              sx={{
                backgroundColor: '#f46a6a',
                color: (theme) => theme.palette.background.paper,
                height: '30px',

                ':hover': {
                  backgroundColor: '#f46a6a',
                },
              }}
            >
              <Minus />
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </ProductItemWrapper>
  );
};

export default ProductItem;
