const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.scdn.co",
			},
		],
	},
	turbopack: {},
	async headers() {
		return [
			{
				source: "/sitemap.xml.gz",
				headers: [
					{
						key: "Content-Type",
						value: "application/gzip",
					},
				],
			},
		];
	},
});
