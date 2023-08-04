import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="max-w-7xl mx-auto px-16 py-10 bg-gradient">
      <Component {...pageProps} />
    </main>
  );
}
