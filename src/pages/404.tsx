import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ButtonLink from "@/components/links/button-links";

export default function NotFoundPage() {
  return (
    <main className="flex justify-center items-center flex-col gap-4">
      <Seo title="Not Found" />
      <img src="/404.png" alt="404" className="sm:max-w-[400px]" />
      <Typography variant="h3" className="text-center">
        Oops, looks like you're lost
      </Typography>
      <ButtonLink href="/" variant="outline">
        Return
      </ButtonLink>
    </main>
  );
}
