import Link from "next/link";
import React from "react";
import styles from "../../styles/Ninja.module.css";

function index({ ninjas }) {
    return (
        <>
            <h1>All ninja</h1>
            {ninjas.map((ninja) => (
                <Link key={ninja.id} href={`/ninja/${ninja.id}`}>
                    <a className={styles.single}>
                        <h3> {ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </>
    );
}

export default index;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await res.json();

    return {
        props: {
            ninjas: data,
        },
    };
};
