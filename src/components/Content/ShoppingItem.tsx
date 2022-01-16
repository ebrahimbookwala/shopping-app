import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Burger2 from "../../images/Burger2.jpg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	root: {
		display: "flex",
		justifyContent: "space-between",
		padding: "1em",
	},
});

function ShoppingItem() {
	const classes = useStyles();

	return (
		<Card>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
						M
					</Avatar>
				}
				title="Jamaican Gold Burger"
				subheader="Chicken"
			/>
			<CardMedia
				component="img"
				height="194"
				image={Burger2}
				alt="Paella dish"
			/>

			<CardActions classes={{ root: classes.root }}>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="buy">
					<AddShoppingCartIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default ShoppingItem;
