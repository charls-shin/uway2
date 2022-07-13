import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useSelector,useDispatch} from "react-redux";
import {decrement,increment} from "./store/reducers/counterSlice";


function AppRedux() {
	const count = useSelector((state => state.counter.value))
	const dispatch = useDispatch()
	return (
		<div className="App">
			<h2> redux app </h2>
			<Stack spacing={2} direction="row">
				<Avatar>{count}</Avatar>
				<Button variant="contained" startIcon={<AddIcon />} onClick={()=>dispatch(increment())}>increase</Button>
				<Button variant="outlined" startIcon={<RemoveIcon />} onClick={()=>dispatch(decrement())}>decrease</Button>
			</Stack>
		</div>
	);
}

export default AppRedux;
