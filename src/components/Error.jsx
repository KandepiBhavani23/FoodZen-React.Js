import ErrorImage from "../assets/images/404Error.jpg";
import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
	// call useRouteError so we can access error data while routing
	const err = useRouteError();
	return (
		<div className="text-center w-auto h-auto p-20 bg-[#e3e3e3]">
			<div className="flex flex-row justify-center items-center">
				<img src={ErrorImage} alt="Error Image" />
			</div>
			<h1 className="text-2xl m-4">
				Oops! The restaurant you're looking for can't be found.
			</h1>
			<h3 className="p-3 text-xl">{err.data}</h3>
			<h3 className="p-5">
				<Link
					className="bg-orange-500 p-3 rounded-lg font-bold text-white font-sans text-xl"
					to="/">
					Back Home
				</Link>
			</h3>
		</div>
	);
};

export default Error;
