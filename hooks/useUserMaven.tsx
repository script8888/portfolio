import { useState, useEffect } from "react";
import { usermavenClient, UsermavenClient } from "@usermaven/sdk-js";
const useUserMaven = () => {
	const [usermaven, setUserMaven] = useState<UsermavenClient | null>(null);

	useEffect(() => {
		// Initialize UsermavenClient when component mounts
		const usermavenInstance: UsermavenClient = usermavenClient({
			key: "UMstZZfOHf",
			tracking_host: "https://events.usermaven.com",
		});

		// Set UsermavenClient instance to state
		setUserMaven(usermavenInstance);

		// Clean up when component unmounts
		return () => {
			// Perform any necessary cleanup for UsermavenClient instance
			// (e.g. unsubscribe event listeners, close connections, etc.)
		};
	}, []);

	return usermaven;
};

export default useUserMaven;
