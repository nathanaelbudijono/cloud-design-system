import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";

export default function SearchEngineOptimization() {
  return (
    <main>
      <Seo title="Search Engine Optimization" description="seo page" />
      <Typography variant="h4">Search Engine Optimization</Typography>
      <Typography variant="p">There is nothing here.</Typography>
      <section className="flex flex-col">
        <ArrowLink
          href="https://github.com/nathanaelbudijono/cloud-design-system/blob/main/src/components/core/seo.tsx"
          className="text-color-100 w-fit"
        >
          Seo Component
        </ArrowLink>
        <ArrowLink
          href="https://github.com/nathanaelbudijono/cloud-design-system/blob/main/src/lib/open-graph.tsx"
          className="text-color-100 w-fit"
        >
          Open Graph
        </ArrowLink>
      </section>
    </main>
  );
}
