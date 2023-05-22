import { SelectChangeEvent, styled } from '@mui/material';
import ChangeTypeListProductSelect from './selects/ChangeTypeListProduct';
import AddProduct from './button/AddProduct';
import { TypeProductListEnum } from '..';

const ActionWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  display: 'flex',
  justifyContent: 'space-between',
}));

export interface IActionProductList {
  setTypeProductList: (typeProductList: TypeProductListEnum) => void;
  typeProductList: TypeProductListEnum;
}

const ActionProductList = ({
  setTypeProductList,
  typeProductList,
}: IActionProductList) => {
  const listChangeType = [
    { id: 1, label: TypeProductListEnum.grid },
    { id: 2, label: TypeProductListEnum.list },
  ];

  const handleChangeTypeProductList = (event: SelectChangeEvent) => {
    if (event?.target?.value) {
      const itemType = listChangeType.find(
        (item) => item?.id?.toString() === event?.target?.value?.toString()
      );

      if (itemType) {
        setTypeProductList(itemType?.label as TypeProductListEnum);
      }
    }
  };

  return (
    <ActionWrapper>
      <ChangeTypeListProductSelect
        title="Type List"
        listChangeType={listChangeType}
        defaultValue={
          listChangeType
            ?.find((item) => item?.label === typeProductList)
            ?.id?.toString() ?? ''
        }
        handleChange={handleChangeTypeProductList}
      />
      <AddProduct title="Add Product" />
    </ActionWrapper>
  );
};

export default ActionProductList;
