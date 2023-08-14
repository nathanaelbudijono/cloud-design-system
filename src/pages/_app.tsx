import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <section className="mx-auto px-16 py-10 bg-d-100 bg-gradient-to-tr from-d-600 to-d-100 dark:bg-n-100 dark:from-n-100 dark:to-n-600 max-md:px-6 max-md:py-3">
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          height={2}
          showOnShallow={true}
        />

        <Component {...pageProps} />
      </section>
    </ThemeProvider>
  );
}
