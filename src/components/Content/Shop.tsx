import ShoppingItem from "./ShoppingItem";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import Cart from "./Cart";

const useStyles = makeStyles({
	paperRoot: {
		width: "clamp(300px, 100%, 800px)",
		margin: "0 auto",
		position: "relative",
	},
});

const Shop = () => {
	const classes = useStyles();
	return (
		<Paper elevation={8} classes={{ root: classes.paperRoot }}>
			<Cart />
			<Grid
				container
				alignItems="center"
				// justifyContent="space-around"
				spacing={2}
			>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ShoppingItem />
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Shop;
