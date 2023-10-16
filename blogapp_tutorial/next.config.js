/** @type {import('next').NextConfig} */
// import { withContentlayer } from "next-contentlayer";
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
	compiler: {
		removeConsole: true,
	},
};
module.exports = withContentlayer({ ...nextConfig });
// export default withContentlayer({ nextConfig });
