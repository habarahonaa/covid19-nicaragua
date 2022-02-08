import Head from "next/head";
import { NicaraguaDashboardLayout } from "../../components/Dashboard/NicaraguaDataLayout";
import { Copyright } from "../../components/Footer/Footer";
import styles from "../../styles/Home.module.css";

export default function NicaraguaData() {
  return (
    <div>
      <Head>
        <title>COVID-19 Nicaragua</title>
        <meta
          name="description"
          content="Casos de Coronavirus o COVID-19 en Nicaragua"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NicaraguaDashboardLayout />
      <footer style={{ margin: "1rem 0 2rem 0" }}>
        <Copyright />
      </footer>
    </div>
  );
}
