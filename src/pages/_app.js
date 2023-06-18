import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import AppNavbar from "@/components/AppNavbar";
import theme from "../styles/theme";
import { Paper } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Paper className="app">
        <AppNavbar />
        <Component {...pageProps} />{" "}
      </Paper>
    </ThemeProvider>
  );
}
