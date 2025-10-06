// useIntersectionObserver.js
import { useEffect, useState, useRef } from "react";

export function useIntersectionObserver() {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);

		// copy ref.current to a local variable to avoid the ref.current value
		// changing between the effect and its cleanup (ESLint/react-hooks warning)
		const current = ref.current;

		if (current) {
			observer.observe(current);
		}

		return () => {
			if (current) {
				observer.unobserve(current);
			}
		};
	}, []);

	return [ref, isIntersecting];
}
