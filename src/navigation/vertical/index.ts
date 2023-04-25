import { translate } from 'src/i18n/translate';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// ** Type import
import { NavLink, VerticalNavItemsType } from 'src/layouts/types';
import { GridViewOutlined, HomeWorkOutlined, PeopleAltOutlined } from '@mui/icons-material';

const navigation = (): VerticalNavItemsType => [
  {
    title: translate('dashboard'),
    icon: GridViewOutlined as unknown as NavLink['icon'],
    path: '/',
  },
  
];

export default navigation;
