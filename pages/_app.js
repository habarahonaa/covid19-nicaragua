import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      try {
        if (window.gtag) {
          window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
            page_path: url,
          });
        }
      } catch (error) {
        console.log("Error from the trackerPageView => ", error);
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
