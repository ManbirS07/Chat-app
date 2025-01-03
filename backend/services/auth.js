import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
		expiresIn: "1d",
	});//userid is the payload here

	res.cookie("jwt", token, {//in the response,setting the cookie name as jwt
		maxAge: 15 * 24 * 60 * 60 * 1000, // Milisecond
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};


export default generateTokenAndSetCookie;