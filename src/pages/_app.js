import { useState, useRef } from "react";
import styled from "styled-components/macro";
import Head from "next/head";
import GlobalStyle from "components/styles/GlobalStyle";
import Header from "components/layout/Header";
import Nav from "components/layout/Nav";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Provider as AuthProvider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef();
  if (!queryClientRef.current) queryClientRef.current = new QueryClient();
  return (
    <>
      <GlobalStyle />
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://apis.google.com/js/api.js"></script>
      </Head>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <AuthenticatedApp>
            <AuthProvider session={pageProps.session}>
              <Component {...pageProps} />
            </AuthProvider>
          </AuthenticatedApp>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

function AuthenticatedApp({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <div
      css={`
        background: var(--colors-background--main);
        min-height: 100vh;
        display: grid;
        grid-template-rows: 10rem 1fr;
        grid-template-columns: [sidebar-start] ${isNavOpen ? "25rem" : "8rem"} [sidebar-end content-start] 1fr [content-end];
      `}
    >
      <Header setIsNavOpen={setIsNavOpen} setQuery={setQuery} />
      <div
        css={`
          grid-row: 2/3;
          grid-column: sidebar-start/sidebar-end;
          background: var(--colors-background--sub);
        `}
      >
        <Nav isNavOpen={isNavOpen} />
      </div>
      <main
        css={`
          padding: 5rem 0;
          grid-row: 2/3;
          grid-column: content-start / content-end;
        `}
      >
        {children}
      </main>
    </div>
  );
}

export default MyApp;
