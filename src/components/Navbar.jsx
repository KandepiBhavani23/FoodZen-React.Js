import { useEffect, useState } from "react";
import { TbDiscount2, TbHelpHexagon } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { PiBowlFoodBold } from "react-icons/pi";
import { BiSolidHomeSmile } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
	const location = useLocation();
	const cartItems = useSelector((state) => state.cart.items);
	const length = cartItems.reduce((total, item) => (total += item.quantity), 0);

	// Check if the current location is the home page ("/")
	const isHomePage = location.pathname === "/";

	return (
		<>
			{isHomePage && ( // Show the background animation only on the home page
				<div
					style={{
						backgroundImage: `url('/navbar/homeImage.png')`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						height: "100vh",
						width: "100%",
						animation: "change 60s infinite ease-in-out",
					}}>
					<nav className="flex justify-between items-center px-12 py-5 ">
						<Link to="/">
							<img src="/app_logo.png" alt="appLogo" className="w-40" />
						</Link>

						<ul className="flex items-center min-w-[40px] ">
							<Link to="/">
								<li className="text-white text-base font-semibold font-sans mx-6 flex items-center hover:text-[#fc8019] cursor-pointer">
									<BiSolidHomeSmile className="mr-1 text-xl font-semibold" />
									Home
								</li>
							</Link>
							<Link to="restaurants">
								<li className="text-white text-base font-semibold font-sans mx-6 flex items-center hover:text-[#fc8019] cursor-pointer">
									<PiBowlFoodBold className="mr-1 text-xl font-semibold" />
									Food Menu
								</li>
							</Link>
							<li className="text-white text-base font-semibold font-sans mx-6 flex items-center hover:text-[#fc8019] cursor-pointer">
								<TbDiscount2 className="mr-1 text-xl font-semibold" />
								Offers
								<sup className="text-[#ffa700] text-xs ml-2 font-extrabold">
									NEW
								</sup>
							</li>
							<li className="text-white text-base font-semibold font-sans mx-6 flex items-center hover:text-[#fc8019] cursor-pointer">
								<TbHelpHexagon className="mr-1 text-xl font-semibold" />
								Help
							</li>
							<li className="text-white text-base font-semibold font-sans mx-6 flex items-center hover:text-[#fc8019] cursor-pointer">
								<FaRegUser className="mr-1 text-xl font-semibold" />
								Sign In
							</li>
							<Link to="cart">
								<li className="text-white text-base font-semibold font-sans mx-6 flex items-center hover:text-[#fc8019] cursor-pointer">
									<TiShoppingCart className="mr-1 text-xl font-semibold" />
									Cart - {length}
								</li>
							</Link>
						</ul>
					</nav>

					<div className="flex flex-col text-center ml-[120px] mt-[50px] w-1/3">
						<span className="flex justify-center items-center bg-opacity-20 bg-white px-4 py-1 w-[200px] rounded-full">
							<img
								src="https://cdn-icons-png.flaticon.com/128/7541/7541900.png"
								alt=""
								className="w-[40px] mr-2"
							/>
							<p className="text-yellow-600 text-lg">People trust us</p>
						</span>
						<h1 className="text-white font-medium font-sans text-4xl text-left leading-tight mt-5">
							People who love to eat are always the best people
						</h1>
						<p className="text-white text-left mt-7 text-base leading-7">
							Get the best quality and most delicious food in the world, you can
							get them all at{" "}
							<span className="text-yellow-500 font-bold text-base">
								FOOD ZEN
							</span>
						</p>

						<Link
							to="restaurants"
							className="px-4 py-3 w-[200px] mt-7 bg-orange-600 text-white text-xl rounded-full">
							Explore Our Menu
						</Link>
					</div>
				</div>
			)}

			{!isHomePage && ( // Show the navbar on all other pages
				<div className="shadow-md">
					<nav className="flex justify-between items-center px-12 py-5 ">
						<Link to="/">
							<img src="/app_logo.png" alt="appLogo" className="w-40" />
						</Link>

						<ul className="flex items-center min-w-[40px] ">
							<Link to="/">
								<li className="text-[#3d4152] text-base font-semibold font-sans mx-6 flex items-center hover:text-[#fc8019] cursor-pointer">
									<BiSolidHomeSmile className="mr-1 text-xl font-semibold" />
									Home
								</li>
							</Link>
							<Link to="restaurants">
								<li className="text-[#3d4152] text-base font-semibold font-sans mx-6 flex items-center hover:text-[#fc8019] cursor-pointer">
									<PiBowlFoodBold className="mr-1 text-xl font-semibold" />
									Food Menu
								</li>
							</Link>
							<li className="text-[#3d4152] text-base font-semibold font-sans mx-6 flex items-center hover:text-[#fc8019] cursor-pointer">
								<TbDiscount2 className="mr-1 text-xl font-semibold" />
								Offers
								<sup className="text-[#ffa700] text-xs ml-2 font-extrabold">
									NEW
								</sup>
							</li>
							<li className="text-[#3d4152] text-base font-semibold font-sans mx-6 flex items-center hover:text-[#fc8019] cursor-pointer">
								<TbHelpHexagon className="mr-1 text-xl font-semibold" />
								Help
							</li>
							<Link>
								<li className="text-[#3d4152] text-base font-semibold font-sans mx-6 flex items-center hover:text-[#fc8019] cursor-pointer">
									<FaRegUser className="mr-1 text-xl font-semibold" />
									Sign In
								</li>
							</Link>
							<Link to="cart">
								<li className="text-[#3d4152] text-base font-semibold font-sans mx-6 flex items-center hover:text-[#fc8019] cursor-pointer">
									<TiShoppingCart className="mr-1 text-xl font-semibold" />
									Cart - {length}
								</li>
							</Link>
						</ul>
					</nav>
				</div>
			)}
		</>
	);
};

export default Navbar;
