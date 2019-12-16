module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				useBuiltIns: "usage",
				modules: false
			}
		]
	],
	plugins: [
		["@babel/plugin-proposal-class-properties", { loose: true }],
		"@babel/plugin-transform-classes"
	]
};
