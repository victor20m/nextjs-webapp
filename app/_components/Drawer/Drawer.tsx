import React from "react";

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useRouter } from "next/navigation";
interface Props {
  drawerOpen: boolean;
}
export default ({ drawerOpen }: Props) => {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path.toLowerCase());
  };
  const drawerMenu = (
    <div>
      <Toolbar className="toolbar" sx={{ bgcolor: "#1A1A27" }}>
        <img
          style={{ marginLeft: 10 }}
          src={"images/company-logo.png"}
          srcSet={`images/company-logo.png?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={"company-logo"}
          width={150}
          loading="lazy"
        />
      </Toolbar>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Login"].map((text, index) => (
          <ListItemButton key={index} onClick={() => handleNavigation(text)}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const drawerWidth = 240;
  return (
    <Box sx={{ width: { sm: 220 }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="persistent"
        open={drawerOpen}
        sx={{
          display: { xs: "inline", sm: "inline", },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderRight: 0,
            boxShadow: "0px 2px 4px -1px",
            marginRight: 10,
          },
        }}
      >
        {drawerMenu}
      </Drawer>
    </Box>
  );
};
