import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";
import ButtonLink from "@/components/links/button-links";
import sandbox from "@/constant/sandbox-link";

export default function Home() {
  const { cards } = sandbox;
  return (
    <main className="flex items-center justify-center flex-col">
      <Seo
        title="Cloud Design System"
        description="Design system used on projects"
      />
      <Typography variant="h1">Cloud Design System</Typography>
      <Typography variant="p">
        Check out the{" "}
        <ArrowLink href="https://github.com/budinathan" target="_blank">
          repository
        </ArrowLink>
      </Typography>
      <section className="mt-2 grid grid-cols-3 gap-2">
        {cards.map((item) => (
          <ButtonLink variant="outline" size="sm" href={item.link}>
            {item.title}
          </ButtonLink>
        ))}
      </section>
    </main>
  );
}
