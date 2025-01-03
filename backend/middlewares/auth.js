import User from "../models/user.js";
import jwt from "jsonwebtoken";
const protectRoute = async (req, res, next) => {
	try {
		//cookie-parser is used here to access the cookie
		const token = req.cookies.jwt;

		if (!token) {
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}

		const decoded = jwt.verify(token, process.env.SECRET_KEY);//verifying the token's signature

		if (!decoded) 
		{
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}
		//we get the userId back from the token as it was the payload while creating the token
		const user = await User.findById(decoded.userId).select("-password");//selecting all fields except password

		if (!user) 
		{
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;//currently authenticated user

		next();//this calls the next funxtion in the middleware stack,i.e sendMessage in this case
	} 
    catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default protectRoute;