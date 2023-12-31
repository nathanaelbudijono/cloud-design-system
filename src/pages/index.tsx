import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";
import ButtonLink from "@/components/links/button-links";
import UnderlineLink from "@/components/links/underline-link";
import sandbox from "@/constant/sandbox-link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { CiDark, CiSun } from "react-icons/ci";

export default function Home() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const { cards } = sandbox;
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <main className="flex items-center justify-center flex-col text-center relative">
      <Seo
        title="Cloud Design System"
        description="Design system used on projects"
      />

      <div className="flex gap-2 mb-2">
        <Typography variant="h2">Cloud Design System</Typography>
        <button
          onClick={toggleTheme}
          className="h-fit w-fit p-1 rounded-lg text-color-100 hover:bg-d-500 dark:hover:bg-n-300 transition-all duration-500 ease-in"
        >
          {theme === "dark" ? <CiDark /> : <CiSun />}
        </button>
      </div>
      <Typography variant="small" color="muted">
        Check out the{" "}
        <ArrowLink
          href="https://github.com/nathanaelbudijono/cloud-design-system"
          target="_blank"
        >
          repository
        </ArrowLink>
      </Typography>
      <section className="mt-5 flex flex-wrap justify-center gap-2 max-w-5xl">
        {cards.map((item, index) => (
          <ButtonLink key={index} variant="outline" size="sm" href={item.link}>
            {item.title}
          </ButtonLink>
        ))}
      </section>
      <footer className="absolute bottom-2 flex items-center gap-1">
        <Typography variant="small" color="muted">
          © {new Date().getFullYear()} By{" "}
        </Typography>
        <UnderlineLink
          href="https://nathanaelbudijono.vercel.app"
          target="_blank"
        >
          <Typography variant="small" color="muted">
            Nathan
          </Typography>
        </UnderlineLink>
        <Typography variant="small" color="muted">
          and
        </Typography>
        <UnderlineLink href="https://steven2801.vercel.app" target="_blank">
          <Typography variant="small" color="muted">
            Steven
          </Typography>
        </UnderlineLink>
      </footer>
    </main>
  );
}
