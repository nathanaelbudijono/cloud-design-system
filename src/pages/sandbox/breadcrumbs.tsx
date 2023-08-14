import Breadcrumbs from "@/components/core/breadcrumb";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";

export default function Breadcrumb() {
  return (
    <main>
      <Seo title="Breadcrumbs" description="Breadcrumbs" />
      <Typography variant="h4">Breadcrumbs</Typography>
      <Breadcrumbs />
    </main>
  );
}
