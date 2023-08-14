import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className="mx-auto px-16 py-10 bg-gradient max-md:px-6 max-md:py-3">
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        height={2}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </section>
  );
}
