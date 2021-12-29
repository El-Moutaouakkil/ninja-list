import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <Image src='/ninja.jpg' width={70} height={60} alt='Inja' />
            </div>
            <Link href='/'>Home</Link>

            <Link href='about'>About</Link>

            <Link href='/ninja'>Ninja Listing</Link>
        </nav>
    );
}

export default Navbar;
