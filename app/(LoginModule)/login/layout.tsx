"use client";

import { Box, CssBaseline, Grid } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section>
          <Box
            sx={{
              background: "no-repeat center center fixed",
              backgroundSize: "cover",
              display: "block",
              left: "-5px",
              top: "-5px",
              bottom: "-5px",
              position: "fixed",
              right: "-5px",
              zIndex: "1",
              filter: "blur(5px)",
              backgroundColor: "#151019",
            }}
          >
            <Grid
              container
              component="main"
              sx={{
                backgroundImage: `url(images/login.png)`,
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              <CssBaseline />
            </Grid>
          </Box>
          <Box
            sx={{
              position: "fixed",
              zIndex: 1,
              display: "flex",
              marginLeft: "38%",
              marginTop: "10%",
              backgroundColor: "white",
              height: "60%",
              width: "25%",
              borderRadius: "10px",
            }}
          >
            {children}
          </Box>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
