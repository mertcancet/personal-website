import React from 'react';
import Head from 'next/head';

import Footer from '../footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Mertcan Cetinkaya | Front end Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="relative overflow-hidden min-h-screen bg-[#020414]">
        <div className="w-full h-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
