import { useState } from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	root: (val) => ({
		color: "#4b4646",
	}),
});

export default function NavBar() {
	const [value, setValue] = useState(1);

	const classes = useStyles(value);

	return (
		<Paper
			sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
			elevation={3}
		>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction
					label="Recents"
					icon={
						<Link to="/history">
							<RestoreIcon htmlColor={value === 0 ? "red" : "#4b4646"} />
						</Link>
					}
					classes={{ root: classes.root }}
				/>

				<BottomNavigationAction
					label="Favorites"
					icon={
						<Link to="/shop">
							<AddShoppingCartIcon
								htmlColor={value === 1 ? "red" : "#4b4646"}
							/>
						</Link>
					}
					classes={{ root: classes.root }}
				/>
				<BottomNavigationAction
					label="Account"
					icon={
						<Link to="/account">
							<PersonIcon htmlColor={value === 2 ? "red" : "#4b4646"} />
						</Link>
					}
					classes={{ root: classes.root }}
				/>
			</BottomNavigation>
		</Paper>
	);
}
