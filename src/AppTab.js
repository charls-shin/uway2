import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AppFn from './AppFn';
import AppClass from "./AppClass";
import AppRedux from './AppRedux';
import {useSelector} from "react-redux";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					{children}
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function AppTab() {
	const [value, setValue] = React.useState(0);
	const [num, setNum] = React.useState(0);
	const increaseNum = () => {
		setNum(num+1);
	};
	const decreaseNum = () => {
		setNum(num-1);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const count = useSelector((state => state.counter.value))

	return (
		<Box sx={{ width: '100%' }}>
			전역 : {num} , redux : {count}
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab label="function" {...a11yProps(0)} />
					<Tab label="class" {...a11yProps(1)} />
					<Tab label="redux" {...a11yProps(2)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<AppFn count={num} increaseNum={increaseNum} decreaseNum={decreaseNum}/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<AppClass count={num} increaseNum={increaseNum} decreaseNum={decreaseNum}/>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<AppRedux />
			</TabPanel>
		</Box>
	);
}
