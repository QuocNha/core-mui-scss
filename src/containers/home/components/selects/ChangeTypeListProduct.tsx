import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface ISelect {
  label?: string;
  id?: number;
}

export interface IChangeTypeListProductSelect {
  listChangeType?: ISelect[];
  title?: string;
  defaultValue?: string | undefined;
  handleChange: (event: SelectChangeEvent) => void;
}

const ChangeTypeListProductSelect = ({
  listChangeType = [],
  title = '',
  defaultValue = '',
  handleChange,
}: IChangeTypeListProductSelect) => {
  return (
    <FormControl>
      <InputLabel id="select-type-label">{title}</InputLabel>
      <Select
        labelId="select-type"
        id="demo-simple-select"
        value={defaultValue}
        onChange={handleChange}
      >
        {listChangeType?.map((item) => {
          return (
            <MenuItem key={item?.id} value={item?.id}>
              {item?.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ChangeTypeListProductSelect;
