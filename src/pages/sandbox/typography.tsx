import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";

export default function TypographyPage() {
  return (
    <main>
      <Seo title="Typography" description="Typography" />
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="p">Paragraph</Typography>
      <Typography variant="blockquote">Block quote</Typography>
      <Typography variant="code">code</Typography>
      <Typography variant="large">Base bold</Typography>
      <Typography variant="lead">Base lead</Typography>
      <Typography variant="small">Small</Typography>
      <Typography variant="muted">Small muted</Typography>
    </main>
  );
}
