import React from 'react';

import {Paper, Switch} from '@material-ui/core';

import { ThemeProvider } from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core/styles';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark"
    }
  })
  
  const lightTheme = createMuiTheme({
    palette: {
      type: "light"
    }  
  });

  return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> 
        <Paper square={true} style={{height: "100vh"}}>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Paper>
      </ThemeProvider>
  )
}



export default App;