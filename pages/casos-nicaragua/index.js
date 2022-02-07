import Head from "next/head";
import { NicaraguaDashboardLayout } from "../../components/Dashboard/NicaraguaDataLayout";
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
    </div>
  );
}
