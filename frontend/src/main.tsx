import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Dashboard from './page/Dashboard';
import Nav from './component/Nav';

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
      <Nav />
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
