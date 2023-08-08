import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@mui/material/Grid';
import { Box, TextField } from '@mui/material';
import { CssBaseline, InputAdornment, Typography } from '@mui/material';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';

export default () => {
  const theme = createTheme({
    palette: { primary: { main: "#001e3c" } },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{
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
        backgroundColor: "#151019"
      }}
      >
        <Grid container component="main" sx={{
          backgroundImage: `url(images/login.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}>
          <CssBaseline />
        </Grid>
      </div>
      <Box
        sx={{
          position: 'fixed',
          zIndex: 1,
          display: "flex",
          marginLeft: "38%",
          marginTop: "10%",
          backgroundColor: "white",
          height: "60%",
          width: "25%",
          borderRadius: "10px"
        }}
      >
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center">
          <Box component="form">
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center">
              <Typography variant="h3">Login</Typography>
              <TextField
                autoComplete="new-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person2RoundedIcon />
                    </InputAdornment>
                  ),
                  sx: { width: "300px" }
                }}
                sx={{ alignSelf: "center", my: 3 }} id="standard-basic" label="User" variant="outlined" />
              <TextField
                autoComplete="new-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyRoundedIcon />
                    </InputAdornment>
                  ),
                  sx: { width: "300px" }
                }}
                sx={{ alignSelf: "center", my: 2 }} id="standard-basic" label="Password" type="password" variant="outlined" />

              <Button sx={{ my: 3 }} variant="contained">Login</Button>
            </Grid>
          </Box>

        </Grid>
      </Box>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </ThemeProvider >
  )
}
