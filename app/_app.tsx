import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import RootLayout from "./layout";
import { AnimatePresence } from "framer-motion";
import AppLayout from "./(AppModule)/layout";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <RootLayout>
        <AnimatePresence>
          <AppLayout>{page}</AppLayout>
        </AnimatePresence>
      </RootLayout>
    ));
  return getLayout(<Component {...pageProps} />);
}
