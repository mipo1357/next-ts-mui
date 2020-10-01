import React from 'react';
// import Link from 'next/link';
import Head from 'next/head';
import AppBar from '../components/AppBar';
import Container from '@material-ui/core/Container';

type Props = {
  children?: any; //React Nodeじゃだめ
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <AppBar />
      <nav></nav>
    </header>
    <Container maxWidth="md">{children}</Container>
    <footer>
      <Container maxWidth="md">
        <hr />
        <span>I'm here to stay (Footer)</span>
      </Container>
    </footer>
  </div>
);

export default Layout;
