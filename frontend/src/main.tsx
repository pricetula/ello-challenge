import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from './page/Dashboard';
import Nav from './component/Nav';
import { AppContextProvider } from './context/AppContext';
import SearchBoxModal from './component/SearchBox/SearchBoxModal';

const theme = createTheme({
  palette: {
    primary: {
      main: "#5ACCCC",
      light: "#CFFAFA",
      dark: "#28B8B8",
    },
    secondary: {
      main: "#335C6E",
      light: "#b1c5ce",
      dark: "#335C6E",
    },
    text: {
      primary: "#335C6E",
      secondary: "#335C6E",
    },
    error: {
      main: "#F76434",
      light: "#FFE6DC",
    }
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <Nav />
            <RouterProvider router={router} />
          <SearchBoxModal />
        </AppContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
