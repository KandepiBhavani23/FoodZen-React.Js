import React, { useState, useEffect } from "react";

const useLocationData = () => {
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setLatitude(position.coords.latitude);
				setLongitude(position.coords.longitude);
			},
			(error) => {
				console.error("Error fetching location:", error.message);
			}
		);
	}, []);

	return [latitude, longitude];
};

export default useLocationData;
