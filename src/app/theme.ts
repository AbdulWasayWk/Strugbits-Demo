"use client";

import { createTheme } from "@mui/material/styles";

export let theme = createTheme();

theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1350,
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: {
					textTransform: "none",
					backgroundColor: "#004370",
					color: "white",
					fontWeight: 600,
					padding: "6px 32px",
				},
			},
		},
		MuiTabs: {
			styleOverrides: {
				root: {
					width: "60%",
					[theme.breakpoints.down("sm")]: {
						width: "100%",
					},
				},
			},
			defaultProps: {
				TabIndicatorProps: {
					style: {
						backgroundColor: "#004370",
						height: "5px",
						transition: "",
					},
				},
			},
		},
		MuiTab: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: {
					width: "20%",
					color: "black",
					fontWeight: "600",
					"&.Mui-selected": {
						color: "#004370",
					},
					[theme.breakpoints.down("sm")]: {
						width: "50%",
					},
				},
			},
		},
		MuiLinearProgress: {
			styleOverrides: {
				root: {
					backgroundColor: "white",
					"& .MuiLinearProgress-bar": {
						backgroundColor: "#004370",
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: "10px",
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					padding: "20px 20px 20px 20px",
				},
			},
		},
		MuiCardActionArea: {
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiRating: {
			styleOverrides: {
				root: {
					color: "#004370",
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				root: {
					"& .MuiDialog-container": {
						"& .MuiPaper-root": {
							width: "100%",
							height: "100%",
							maxWidth: "500px",
							maxHeight: "250px",
						},
					},
				},
			},
		},
		MuiDialogTitle: {
			styleOverrides: {
				root: {
					marginTop: "20px",
					textAlign: "center",
					fontWeight: "bold",
				},
			},
		},
		MuiDialogContent: {
			styleOverrides: {
				root: {
					display: "flex",
					flexWrap: "wrap",
					gap: "10px",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "0px 50px",
				},
			},
		},
	},
});
