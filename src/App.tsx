// import MainGrid from "./View/Components/MainGrid/MainGrid"
import { router } from "./Model/Routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme} defaultMode="dark">
      <CssBaseline>
        <RouterProvider router={router} />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
