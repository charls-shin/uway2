import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function AppFn({count,increaseNum,decreaseNum}) {
  // const [count,setCount] = useState(0);
  return (
    <div className="App">
      <h2> function app </h2>
      <Stack spacing={2} direction="row">
        <Avatar>{count}</Avatar>
        <Button variant="contained" startIcon={<AddIcon />} onClick={increaseNum}>increase</Button>
        <Button variant="outlined" startIcon={<RemoveIcon />} onClick={decreaseNum}>decrease</Button>
      </Stack>
    </div>
  );
}

export default AppFn;
