import "bootstrap/dist/css/bootstrap.min.css";
import LayoutPage from "@/components/layout";
import "@/styles/custom.css";
import "@/styles/theme.min.css";
import { wrapper } from "@/utils/store";
import { Provider } from "react-redux";
import { useStore } from "react-redux";

// Use wrapper.withRedux to wrap your main component
const WrappedApp = wrapper.withRedux(({ Component, pageProps }) => {
  const store = useStore();

  return (
    <Provider store={store}>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </Provider>
  );
});

export default WrappedApp;
