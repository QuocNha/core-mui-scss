import { TextField } from '@mui/material';

const NumberProductInput = () => {
  return (
    <TextField
      type="number"
      sx={{
        maxWidth: '80px',
        '.MuiInputBase-root': {
          height: '30px',
          paddingTop: 0,
          paddingBottom: 0,
        },
      }}
    />
  );
};
export default NumberProductInput;
