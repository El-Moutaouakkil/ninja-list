import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <div className='content'>
            <Head>
                <title>Ninja page</title>
            </Head>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
