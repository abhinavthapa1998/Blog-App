import "../styles/index.css";
import { Provider } from "react-redux";
import { Store } from "../app/Store";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={Store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
