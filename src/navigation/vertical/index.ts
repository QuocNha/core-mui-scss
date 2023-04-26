import { translate } from 'src/i18n/translate';

// ** Type import
import { NavLink, VerticalNavItemsType } from 'src/layouts/types';
import { GridViewOutlined } from '@mui/icons-material';

const navigation = (): VerticalNavItemsType => [
  {
    title: translate('home'),
    icon: GridViewOutlined as unknown as NavLink['icon'],
    path: '/',
  },
  {
    title: translate('layout'),
    icon: GridViewOutlined as unknown as NavLink['icon'],
    path: '/',
  },
  {
    title: translate('button'),
    icon: GridViewOutlined as unknown as NavLink['icon'],
    path: '/',
  },
  
  
];

export default navigation;
