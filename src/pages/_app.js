import "../styles/global.css";
import { Header } from "../components/Header";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";
function MyApp({ Component, pageProps }) {
  const initalState = useInitialState();

  return (
    <AppContext.Provider value={initalState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
