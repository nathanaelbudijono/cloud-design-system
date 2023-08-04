import { Framer } from "@/components/core/framer";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";
import ButtonLink from "@/components/links/button-links";
import UnstyledLink from "@/components/links/unstyled-link";
import sandbox from "@/constant/sandbox-link";

export default function Home() {
  const { cards } = sandbox;
  return (
    <main className="flex items-center justify-center flex-col text-center relative">
      <Seo
        title="Cloud Design System"
        description="Design system used on projects"
      />
      <Typography variant="h2">Cloud Design System</Typography>
      <Typography variant="small" color="muted">
        Check out the{" "}
        <ArrowLink href="https://github.com/budinathan" target="_blank">
          repository
        </ArrowLink>
      </Typography>
      <section className="mt-5 flex flex-wrap justify-center gap-2">
        {cards.map((item, index) => (
          <Framer key={index} delay={index * 0.2}>
            <ButtonLink variant="outline" size="sm" href={item.link}>
              {item.title}
            </ButtonLink>
          </Framer>
        ))}
      </section>
      <section className="absolute bottom-16 flex">
        <Typography variant="small" color="muted">
          On progress, by{" "}
          <UnstyledLink href="https://github.com/budinathan" target="_blank">
            Nathan
          </UnstyledLink>{" "}
          and{" "}
          <UnstyledLink href="https://github.com/steven2801" target="_blank">
            Steven
          </UnstyledLink>
        </Typography>
      </section>
    </main>
  );
}
