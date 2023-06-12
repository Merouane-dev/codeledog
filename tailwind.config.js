/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'primary': '#2B7567',
				'primary-dart': '#163b34'
			},
			backgroundImage: {
				'header': 'url("/images/header.webp")',
			},
		},
	},
	plugins: [],
};
