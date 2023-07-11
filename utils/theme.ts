import { Roboto } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
export let theme = createTheme({
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
	palette: {
		primary: {
			main: '#FF6464',
		},
		secondary: {
			light: '#EDF7FA',
			main: '#00A8CC',
		},
		error: {
			main: red.A400,
		},
		text:{
			primary:'#21243D',
		}
	},
	components: {
		MuiLink: {
			defaultProps: {
				underline: 'none',
			},
			styleOverrides: {
				root: {
					color: 'black',

					'&:hover, &.active': {
						color: '#FF6464',
					},
				},
			},
		},
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained', color: 'primary' },
					style: {
						color: 'white',
					},
				},
			],
		},
	},
})

theme = responsiveFontSizes(theme)
