import React, { memo } from 'react';
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Image } from 'src/components/shared-components/Image';
import { equals } from 'rambda';
import { useTheme } from '@mui/system';
import { IMAGE_DEFAULT } from 'src/constants';

const TextStyled = styled(Typography)(({ theme }: any) => ({
  color: theme.palette.customColors.tableText,
  fontSize: theme.spacing(4),
  fontWeight: '600',
  noWrap: true,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

interface UsernameCellProps {
  name?: string;
  picture?: string;
}

const ProductCellComponent = ({ name, picture }: UsernameCellProps) => {
  const theme = useTheme();

  return (
    <Stack direction="column" alignItems="center" overflow="hidden">
      <Image
        src={picture}
        defaultSrc={IMAGE_DEFAULT.USER}
        alt={name}
        height={100}
        width={150}
        style={{
          objectFit: 'cover',
          minWidth: theme.spacing(10),
          minHeight: theme.spacing(10),
        }}
      />
      <Box sx={{ ml: 2, width: '100%', minWidth: 0, textAlign: 'center' }}>
        <TextStyled>{name}</TextStyled>
      </Box>
    </Stack>
  );
};

export const ProductCell = memo(ProductCellComponent, equals);
