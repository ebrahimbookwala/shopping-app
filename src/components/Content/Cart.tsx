import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CartBadge from "./CartBadge";

const Cart = () => {
	const [anchor, setAnchor] = useState(false);
	return (
		<>
			<Button onClick={() => setAnchor(true)}>
				<CartBadge />
			</Button>
			<Drawer anchor="right" open={anchor} onClose={() => setAnchor(false)}>
				some text
			</Drawer>
		</>
	);
};

export default Cart;
