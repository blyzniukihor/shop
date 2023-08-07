import { Components } from "@mui/material";

export const MuiButton: Components['MuiButton'] = {
	styleOverrides: {
		root: {
			fontWeight: 600,
		},
	},
	variants: [
		{
			props: { variant: 'contained' },
			style: {
				borderRadius: '16px',
			},
		},
	],
}