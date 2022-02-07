import Head from "next/head";
import { WorldDataLayout } from "../components/Dashboard/WorldDataLayout";

export default function Home() {
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
      <WorldDataLayout />
    </div>
  );
}
