import User from "../models/user.js";
import jwt from "jsonwebtoken";
const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;

		if (!token) {
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}

<<<<<<< HEAD
		const decoded = jwt.verify(token, process.env.SECRET_KEY);//verifying the token's signature
=======
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
>>>>>>> a64f282d048168f62bf354deb61749e5f5c08079

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;

		next();
	} 
    catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default protectRoute;