"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
import { Box, TextField } from "@mui/material";
import { InputAdornment, Typography } from "@mui/material";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import { ReactElement, useEffect, useState } from "react";
import LoginLayout from "./layout";
import { NextPageWithLayout } from "../../_app";

const Login: NextPageWithLayout = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted && (
        <>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box component="form">
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h3">Login</Typography>
                <TextField
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person2RoundedIcon />
                      </InputAdornment>
                    ),
                    sx: { width: "300px" },
                  }}
                  sx={{ alignSelf: "center", my: 3 }}
                  id="standard-basic"
                  label="User"
                  variant="outlined"
                  placeholder="user@example.com"
                />
                <TextField
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyRoundedIcon />
                      </InputAdornment>
                    ),
                    sx: { width: "300px" },
                  }}
                  sx={{ alignSelf: "center", my: 2 }}
                  id="standard-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  placeholder="Password..."
                />

                <Button sx={{ my: 3 }} variant="contained">
                  Login
                </Button>
              </Grid>
            </Box>
          </Grid>
        </>
      )}
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>;
};

export default Login;
