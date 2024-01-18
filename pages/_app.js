import "bootstrap/dist/css/bootstrap.min.css";

import LayoutPage from "@/components/layout";
// import '@/styles/globals.css'
import "@/styles/custom.css";
import "@/styles/theme.min.css";
import { useStore, Provider } from "react-redux";
import { wrapper } from "@/utils/store";
import { PersistGate } from "redux-persist/integration/react";

const WrappedApp = wrapper.withRedux(({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const store = useStore((state) => state);

  return getLayout(
    <Provider store={store}>
      <PersistGate loading={null} persistor={store.__persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
});

export default WrappedApp;
