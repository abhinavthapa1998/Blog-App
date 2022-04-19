import "../styles/index.css";
import { Provider } from "react-redux";
import { Store } from "../app/Store";
import { fetchUsers } from "../features/users/UsersSlice";
import Layout from "../components/Layout";
Store.dispatch(fetchUsers());
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={Store}>
        <Layout />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
