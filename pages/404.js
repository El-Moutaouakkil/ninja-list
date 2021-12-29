import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function NotFound() {
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("inside timer");
            router.push('/');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className='not-found'>
            <h1>Oooops....</h1>
            <h2>Page not found</h2>
            Go back to the
            <Link href='/'>
                <a> Homepage</a>
            </Link>
        </div>
    );
}

export default NotFound;
