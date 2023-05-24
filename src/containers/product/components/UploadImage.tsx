// ** MUI Components
import { Avatar, Button, Divider, Stack } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IMAGE_DEFAULT } from 'src/constants';

import { Image } from 'src/components/shared-components/Image';

interface IUploadImage {
  handleUploadFileImage?: (e: any) => void;
  handleRemoveFileImage?: (e: any) => void;
  imageDefault?: string;
  image?: string;
}

// Styled BoxUploadImageStyled
const BoxUploadImageStyled = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  '& .MuiAvatar-root': {
    marginRight: theme.spacing(4),
  },
  '& .MuiButton-root': {
    padding: 0,
    minWidth: 'auto',
    textTransform: 'capitalize',
    fontWeight: 500,
    fontSize: theme.spacing(4),
  },
}));

const UploadImage = (props: IUploadImage) => {
  // Translation
  const { t } = useTranslation();
  // Hooks
  const theme = useTheme();

  // Props
  const {
    handleUploadFileImage,
    handleRemoveFileImage,
    imageDefault = IMAGE_DEFAULT.USER,
    image,
  } = props;

  //   </>
  const boxContentUploadImage = useCallback(() => {
    if (!image) {
      return (
        <Button
          variant="text"
          component="label"
          sx={{ color: '#2196F3' }}
          style={{ textTransform: 'none' }}
        >
          {t('upload_product')}
          <input
            type="file"
            accept="image/png, image/jpeg"
            max={5}
            hidden
            onChange={handleUploadFileImage}
          />
        </Button>
      );
    }

    // There are images
    return (
      <Stack direction="row" spacing={4}>
        <Button
          variant="text"
          component="label"
          onChange={handleUploadFileImage}
          sx={{ color: '#2196F3', marginRight: theme.spacing(4) }}
        >
          {t('change')}
          <input type="file" accept="image/png, image/jpeg" max={5} hidden />
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button
          variant="text"
          component="label"
          onClick={handleRemoveFileImage}
          sx={{ color: theme.palette.error.main }}
        >
          {t('remove')}
        </Button>
      </Stack>
    );
  }, [image]);

  return (
    <BoxUploadImageStyled className="BoxAvatarGroup">
      <Image
        src={image}
        defaultSrc={imageDefault}
        alt="image"
        height={50}
        width={100}
        style={{
          objectFit: 'cover',
          minWidth: theme.spacing(10),
          minHeight: theme.spacing(10),
        }}
      />
      {boxContentUploadImage()}
    </BoxUploadImageStyled>
  );
};

export default UploadImage;
