import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#eb1484",
    },
    secondary: {
      main: "#fff",
    },
    error: { main: red.A400 },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;
