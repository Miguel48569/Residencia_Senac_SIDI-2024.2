import { ThemeProvider, CssBaseline, Container, Box } from "@mui/material";
import { RouterPages } from "./router/RouterPages";
import theme from "../src/utils/theme";
import Header from "./components/header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center" 
        minHeight="60vh" 
        bgcolor={theme.palette.background}
        padding={2} 
      >
        <RouterPages />
        
      </Box>
    </ThemeProvider>
  );
}

export default App;
