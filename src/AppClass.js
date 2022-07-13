import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Stack from "@mui/material/Stack";


export default class AppClass extends React.Component{
	
	render() {
		return(
			<div>
				<h2> class app </h2>
				<Stack spacing={2} direction="row">
					<Avatar>{this.props.count}</Avatar>
					<Button variant="contained" startIcon={<AddIcon />} onClick={this.props.increaseNum}>increase</Button>
					<Button variant="outlined" startIcon={<RemoveIcon />} onClick={this.props.decreaseNum}>decrease</Button>
				</Stack>
			</div>
		);
	}
};