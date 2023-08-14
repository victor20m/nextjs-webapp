"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import { ReactNode } from "react";
import { AppBar, Box } from "@mui/material";
import Navbar from "../_components/NavBar/NavBar";
import Drawer from "../_components/Drawer/Drawer";
import { motion } from "framer-motion";
interface Props {
  children?: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerHeight < 800 && window.innerWidth < 400)
        setDrawerOpen(false);
    });
  }, []);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <section>
        <Head>
          <title>Home</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <AppBar
          sx={{ display: "flex", width: "100%" }}
          position="static"
          color="primary"
          enableColorOnDark
        >
          <Navbar {...{ drawerOpen, setDrawerOpen }} />
          <Drawer {...{ drawerOpen }} />
        </AppBar>
        <Box
          component="main"
          sx={{
            width: { sm: `calc(100% - ${240}px)` },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              paddingLeft: drawerOpen ? 30 : 0,
              margin: 2,
              transition: "0.224s",
            }}
          >
            {children}
          </Box>
        </Box>
      </section>
    </motion.div>
  );
};

export default AppLayout;
