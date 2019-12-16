import babel from "rollup-plugin-babel";

export default {
	output: {
		name: "ky",
		file: "umd.js",
		format: "umd"
	},
	plugins: [
		babel({
			exclude: "node_modules/**"
		})
	]
};
