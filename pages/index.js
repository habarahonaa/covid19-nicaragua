import Head from "next/head";
import { WorldDataLayout } from "../components/Dashboard/WorldDataLayout";
import { Copyright } from "../components/Footer/Footer";

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
      <footer style={{ margin: "1rem 0 2rem 0" }}>
        <Copyright />
      </footer>
    </div>
  );
}
