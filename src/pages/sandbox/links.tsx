import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";
import UnderlineLink from "@/components/links/underline-link";
import UnstyledLink from "@/components/links/unstyled-link";

export default function Links() {
  return (
    <main className="flex gap-4 items-start flex-col">
      <Seo title="Links" description="Links" />
      <Typography variant="h4">Links</Typography>
      <UnstyledLink href="/">
        <Typography variant="p">Unstyled Link</Typography>
      </UnstyledLink>
      <UnderlineLink href="/">
        <Typography variant="p">Underline Link</Typography>
      </UnderlineLink>
      <ArrowLink href="/">
        <Typography>Arrow Link</Typography>
      </ArrowLink>
    </main>
  );
}
