"use client";

import { useEffect, useState } from "react";
import NProgress from "nprogress";

export default function TopProgressbar() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (!isClient) return;

		let timer;

		const handleStart = () => {
			timer = setTimeout(() => {
				NProgress.start();
			}, 1);
		};

		const handleStop = () => {
			clearTimeout(timer);
			NProgress.done();
		};

		window.addEventListener("beforeunload", handleStart);

		return () => {
			window.removeEventListener("beforeunload", handleStart);
			clearTimeout(timer);
		};
	}, [isClient]);

	return null;
}
