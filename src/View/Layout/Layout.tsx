import { alpha, Box } from "@mui/material";
import SideShit from "./Sidebar/SideMenuItems";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <SideShit />

      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : alpha(theme.palette.background.default, 1),
          overflow: "clip",
        })}
      >
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
