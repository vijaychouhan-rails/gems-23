import "bootstrap/dist/css/bootstrap.min.css";

// import LayoutPage from "@/components/layout";
// import '@/styles/globals.css'
import "@/styles/custom.css";
import "@/styles/theme.min.css";
import { wrapper } from "@/utils/store";
import { useStore, Provider } from "react-redux";

// export default function App({ Component, pageProps }) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout || ((page) => page);

//   // return (
//   //   // <LayoutPage>
//   //   <Component {...pageProps} />
//   //   // </LayoutPage>
//   // );

//   return getLayout(<Component {...pageProps} />);
// }

// Use wrapper.withRedux to wrap your main component
const WrappedApp = wrapper.withRedux(({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  const store = useStore();

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
});

export default WrappedApp;
