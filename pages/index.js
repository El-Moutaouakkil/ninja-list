import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <h1 className={styles.title}>Homepage</h1>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                perferendis laudantium id assumenda esse sunt quo perspiciatis
                voluptates cupiditate impedit voluptas veniam, amet hic dolore
                dignissimos, doloremque autem earum repellat velit iste,
                laboriosam provident. Ipsum porro odit aperiam. A, id ipsa!
                Nisi, dolorum fugit quo delectus mollitia dolorem voluptatum
                quibusdam?
            </p>

            <Link href='/ninja'>
                <a className={styles.btn}>See ninja listing</a>
            </Link>
        </div>
    );
}
