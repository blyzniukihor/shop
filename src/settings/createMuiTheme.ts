import { createTheme, ThemeOptions } from "@mui/material";
import { breakpoints } from "@/settings/breakpoints";
import { MuiCard } from "@/settings/components/MuiCard";
import { typography } from "@/settings/typography";
import { MuiButton } from "@/settings/components/MuiButton";

export const themeConfig: ThemeOptions = {
	breakpoints,
	typography,
	components: {
		MuiCard,
		MuiButton,
		// MuiCssBaseline: {
		// 	styleOverrides: normalize,
		// },
	},
}

export const theme = createTheme(themeConfig)