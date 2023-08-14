import { Framer } from "@/components/core/framer";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";
import ButtonLink from "@/components/links/button-links";
import UnderlineLink from "@/components/links/underline-link";
import sandbox from "@/constant/sandbox-link";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  const { cards } = sandbox;
  return (
    <main className="flex items-center justify-center flex-col text-center relative">
      <Seo
        title="Cloud Design System"
        description="Design system used on projects"
      />
      <Typography variant="h2">Cloud Design System</Typography>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>light</button>
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
          <Framer key={index} delay={index * 0}>
            <ButtonLink variant="outline" size="sm" href={item.link}>
              {item.title}
            </ButtonLink>
          </Framer>
        ))}
      </section>
      <footer className="absolute bottom-2 flex items-center gap-1">
        <Typography variant="small" color="muted">
          On progress, by{" "}
        </Typography>
        <UnderlineLink
          href="https://github.com/nathanaelbudijono"
          target="_blank"
        >
          <Typography variant="small" color="muted">
            Nathan
          </Typography>
        </UnderlineLink>
        <Typography variant="small" color="muted">
          and
        </Typography>
        <UnderlineLink href="https://github.com/steven2801" target="_blank">
          <Typography variant="small" color="muted">
            Steven
          </Typography>
        </UnderlineLink>
      </footer>
    </main>
  );
}
