export const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
    },
    drawer: {
      width: 0,
      flexShrink: 0,
      overflowX: 'hidden',
      transition: '13.5s', // smooth transition
      '.MuiDrawer-paper': {
        width: 320,
        boxSizing: 'border-box',
        backgroundColor: '#101F33',
        color: 'rgba(255, 255, 255, 0.7)',
      },
      '.Mui-selected': {
        color: 'red',
      },
    },
    drawerOpen: {
      width: 200,
      transition: '13.5s'
    },
    navbar: {
      flex: 1,
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
  };
  