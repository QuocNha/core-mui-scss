import { ChildCareRounded } from '@mui/icons-material';
import {
  Box,
  BoxProps,
  Chip,
  Collapse,
  CollapseProps,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React, { useState, ElementType, ReactNode } from 'react';
import ListItemButton, {
  ListItemButtonProps,
} from '@mui/material/ListItemButton';
import Link from 'next/link';
import { handleURLQueries } from 'src/utils';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';

// ** Configs Import
import themeConfig from 'src/configs/themeConfig';
import { useTheme, styled } from '@mui/material/styles';
import UserIcon from '../../UserIcon';

const VerticalNavMultiLevel = ({
  item,
  navVisible,
  toggleNavVisibility,
}: any) => {
  // ** Hooks
  const router = useRouter();
  const theme = useTheme();

  // ** Styled Components
  const MenuNavLink = styled(ListItemButton)<
    ListItemButtonProps & {
      component?: ElementType;
      target?: '_blank' | undefined;
    }
  >(() => ({
    width: '100%',
    color: theme.palette.text.primary,
    padding: theme.spacing(2.25, 3.5),
    transition: 'opacity .25s ease-in-out',

    '& .MuiTypography-root': {
      fontWeight: 500,
    },
    '&.active, &.active:hover': {
      backgroundColor: theme.palette.primary.main,
    },

    '&.active .MuiTypography-root, &.active .MuiSvgIcon-root': {
      color: `${theme.palette.common.white} !important`,
    },
  }));

  const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'opacity .25s ease-in-out',
    ...(themeConfig.menuTextTruncate && { overflow: 'hidden' }),
  });

  const CollapseStyled = styled(Collapse)<CollapseProps>({
    '& .MuiButtonBase-root': {
      padding: theme.spacing(3.5, 4),
      borderRadius: theme.spacing(1.5),
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.palette.grey[300],
      },
    },
  });

  const IconTag: ReactNode = item.icon;
  const colorNavLink = '#F3F2F7';

  const isNavLinkActive = (path: string) => {
    return router.pathname.includes(path) || handleURLQueries(router, path);
  };

  const isParentNavLinkActive = (path: string) => {
    return path !== '/' && path && router.pathname.includes(path);
  };

  // ** Props
  const [open, setOpen] = useState(false);

  return (
    <ListItem
      disablePadding
      className="nav-link"
      disabled={item.disabled || false}
      sx={{
        mt: 1.5,
        px: '0 !important',
        borderRadius: theme.spacing(1.5),
        display: 'block',
        backgroundColor: open ? colorNavLink : 'transparent',
      }}
    >
      <MenuNavLink
        component="a"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        sx={{
          py: 3.5,
          px: 4,
          borderRadius: theme.spacing(1.5),
          fontWeight: 500,
          ...(item.disabled
            ? { pointerEvents: 'none' }
            : { cursor: 'pointer' }),
        }}
      >
        <ListItemIcon
          sx={{
            mr: 2.5,
            color: 'text.primary',
            transition: 'margin .25s ease-in-out',
          }}
        >
          <UserIcon icon={IconTag} />
        </ListItemIcon>

        <MenuItemTextMetaWrapper>
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            {item.title}
          </Typography>
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </MenuItemTextMetaWrapper>
      </MenuNavLink>
      <CollapseStyled in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.subMenu.map((child: any) => {
            return (
              <Link
                key={child?.title}
                href={item.path === undefined ? '/' : `${child.path}`}
              >
                <MenuNavLink
                  component="a"
                  className={isNavLinkActive(child.path) ? 'active' : ''}
                  {...(child.openInNewTab ? { target: '_blank' } : null)}
                  onClick={(e) => {
                    if (child.path === undefined) {
                      e.preventDefault();
                      e.stopPropagation();
                    }
                    if (navVisible) {
                      toggleNavVisibility();
                    }
                  }}
                  sx={{
                    ...((ChildCareRounded as any)?.disabled
                      ? { pointerEvents: 'none' }
                      : { cursor: 'pointer' }),
                  }}
                >
                  {!!child?.icon?.length && (
                    <ListItemIcon
                      sx={{
                        mr: 2.5,
                        color: 'text.primary',
                        transition: 'margin .25s ease-in-out',
                      }}
                    >
                      <UserIcon icon={child.icon} />
                    </ListItemIcon>
                  )}

                  <MenuItemTextMetaWrapper>
                    <Typography
                      pl={8}
                      variant="body1"
                      {...(themeConfig.menuTextTruncate && { noWrap: true })}
                    >
                      {child.title}
                    </Typography>
                    {child.badgeContent ? (
                      <Chip
                        label={item.badgeContent}
                        color={item.badgeColor || 'primary'}
                        sx={{
                          height: 20,
                          fontWeight: 500,
                          marginLeft: 1.25,
                          '& .MuiChip-label': {
                            px: 1.5,
                            textTransform: 'capitalize',
                          },
                        }}
                      />
                    ) : null}
                  </MenuItemTextMetaWrapper>
                </MenuNavLink>
              </Link>
            );
          })}
        </List>
      </CollapseStyled>
    </ListItem>
  );
};

export default VerticalNavMultiLevel;
