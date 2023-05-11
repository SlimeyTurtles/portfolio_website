const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Consolas'],
		},	  
		extend: {}
	},

	daisyui: {
		themes: [
			{
				red: {
					primary: "#a991f7",
					secondary: "#b04c5f",
					accent: "#c73741",
					neutral: "#fefefe",
					"base-100": "#fefefe",
				}
			},
			
			"dark", "light", "cupcake"]
	},

	plugins: [
		require("@tailwindcss/typography"),
		require('daisyui'),
	]
};

module.exports = config;
