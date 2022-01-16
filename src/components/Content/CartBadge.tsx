import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
	position: "fixed",
	top: "10px",
	right: "10%",
	"& .MuiBadge-badge": {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
	"MuiButtonBase-root": {
		position: "sticky",
		top: "10px",
		right: "0",
		zIndex: "100",
	},
}));

export default function CartBadge() {
	return (
		<IconButton aria-label="cart" size="large">
			<StyledBadge badgeContent={4} color="secondary">
				<ShoppingCartIcon />
			</StyledBadge>
		</IconButton>
	);
}
