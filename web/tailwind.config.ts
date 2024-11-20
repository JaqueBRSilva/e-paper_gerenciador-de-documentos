import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				white: '#FFFFFF',
				black: '#000000',
				transparent: 'transparent',

				gray200: '#E5E7EB',
				gray500: '#6B7280',
				gray700: '#3A424E',
				gray900: '#191E29',

				green100: '#CAFFD6',
				green500: '#05C151',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
