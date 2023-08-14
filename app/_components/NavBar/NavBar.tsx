import {
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

interface Props {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  drawerOpen: boolean;
}
function Navbar({ setDrawerOpen, drawerOpen }: Props) {
  const router = useRouter();
  return (
      <Box sx={{ flexGrow: 1, paddingLeft: drawerOpen? 30 : 0, transition: "0.224s" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setDrawerOpen(!drawerOpen)}
            edge="start"
            sx={{
              marginRight: 1,
            }}
          >
            {drawerOpen ? (
              <KeyboardDoubleArrowRightIcon fontSize="large" />
            ) : (
              <KeyboardDoubleArrowLeftIcon fontSize="large" />
            )}
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            App
          </Typography>
          <Button color="inherit" onClick={() => router.push("/login")}>
            Login
          </Button>
        </Toolbar>
      </Box>
  );
}

export default Navbar;
