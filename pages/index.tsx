import { Box, useTheme } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import NextLink from 'src/components/shared-components/NextLink';
import { PATH } from 'src/constants';
import { ILink } from 'src/types';

const Home: NextPage = () => {
  const theme = useTheme();
  const router = useRouter();

  const links: ILink[] = [{ url: PATH.HOME, label: 'Flex-Box' }];

  function goToPage(url: string) {
    router.push(url);
  }

  return (
    <Box className="content-center">
      {links?.map((item) => {
        return (
          <NextLink
            href={item?.url ?? '/'}
            variant="body1"
            color="primary"
            key={item?.label}
            sx={{
              textDecoration: 'none',
              margin: theme.spacing(0),
              color: theme.palette.text.primary,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => goToPage(item?.url ?? '/')}
          >
            <>
              {item?.icon}
              {item?.label}
            </>
          </NextLink>
        );
      })}
    </Box>
  );
};

export default Home;
