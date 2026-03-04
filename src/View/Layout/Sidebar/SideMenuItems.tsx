import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Box,
} from "@mui/material";
import { FaDragon, FaGhost } from "react-icons/fa6";
import { GiAbdominalArmor, GiNotebook, GiWoodCabin } from "react-icons/gi";
import { WiAlien } from "react-icons/wi";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import { Link, useLocation } from "react-router-dom";

const Drawer = styled(MuiDrawer)({
  width: 240,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: 240,
    boxSizing: "border-box",
  },
});

const mainListItems = [
  { text: "Home", icon: <GiWoodCabin />, path: "/home" },
  { text: "Armory", icon: <GiAbdominalArmor />, path: "/armory" },
  { text: "Monsters", icon: <FaDragon />, path: "/monsters" },
  { text: "Statistics", icon: <GiNotebook />, path: "/statistics" },
  { text: "Bullshit&Testing", icon: <FaGhost />, path: "/bullshit" },
  { text: "mainpagebraba", icon: <WiAlien />, path: "/" },
];

export default function SideShit() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`&.${drawerClasses.paper}`]: { backgroundColor: "backgorund.paper" },
      }}
    >
      <Box>
        <Stack>
          <List>
            {mainListItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  selected={index === 0}
                  sx={{
                    color: "inherit",
                    border: "1px",
                    borderColor: "white",
                  }}
                >
                  <ListItemIcon sx={{ fontSize: "45px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>
                    {item.text}, {index}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Box>
    </Drawer>
  );
}
