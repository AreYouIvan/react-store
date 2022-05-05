import "../styles/global.css";
import Head from "next/head";
import { Header } from "../components/Header";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";
function MyApp({ Component, pageProps }) {
  const initalState = useInitialState();

  return (
    <AppContext.Provider value={initalState}>
    <Head>
      <title>Yard Sales: E-commerce project by Ivan 💚</title>
    </Head>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
