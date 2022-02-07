import Head from "next/head";
import { WorldDataLayout } from "../components/Dashboard/WorldDataLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>COVID-19 Nicaragua</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WorldDataLayout />
    </div>
  );
}
