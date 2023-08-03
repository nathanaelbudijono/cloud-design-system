import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Typography variant="h1">Cloud Design System</Typography>
      <Typography variant="p">
        Check out the{" "}
        <ArrowLink href="https://github.com/budinathan">repository</ArrowLink>
      </Typography>
      <section className="flex gap-2">
        <Link href="/sandbox/typography">Typography</Link>
        <Link href="/sandbox/links">Links</Link>
      </section>
    </main>
  );
}
