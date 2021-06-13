import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import Layout from "../components/layout/Layout";

import { ApolloProvider } from "@apollo/client";
import client from "../constants/apollo-client"

import AuthenticationLayer from "../components/AuthenticationLayer";

import { UserProvider } from "../store/users";
import { RootProvider } from "../store/rootProvider";

import { SWRConfig } from "swr";

// import { StateProvider } from "../store/store";
export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <UserProvider>
          <AuthenticationLayer>
            <RootProvider>
              <SWRConfig
                value={{
                  fetcher: (...args) =>
                    fetch(...args).then((res) => res.json()),
                }}
              >
                <Layout>
                  <ApolloProvider client={client}>
                    <Component {...pageProps} />
                  </ApolloProvider>
                </Layout>
              </SWRConfig>
            </RootProvider>
          </AuthenticationLayer>
        </UserProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
