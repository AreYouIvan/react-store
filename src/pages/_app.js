import "../styles/globals.css";
import "../styles/global.css";
import "../styles/_vars.scss";
import "../styles/Home.module.css";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";
function MyApp({ Component, pageProps }) {
  const initalState = useInitialState();

  return (
    <AppContext.Provider value={initalState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
