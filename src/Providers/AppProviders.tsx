import {FunctionComponent, ReactNode} from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

interface AppProvidersProps {
  children: ReactNode
}

const theme = createTheme( {
  palette: {
    mode: "dark"
  }
} )

const AppProviders: FunctionComponent<AppProvidersProps> = ( props ) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

export default AppProviders;