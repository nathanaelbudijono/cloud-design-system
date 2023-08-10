import Banner from "@/components/core/banner";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import UnstyledLink from "@/components/links/unstyled-link";

export default function Banners() {
  return (
    <main>
      <Seo title="Banner" description="banner" />
      <section className="fixed w-full left-0 text-center top-0 flex flex-col z-40">
        <div className="py-4 bg-d-700 flex justify-between px-10 items-center">
          <Typography variant="large">Cloud DS</Typography>
          <UnstyledLink href="/" className="text-color-100">
            Home
          </UnstyledLink>
        </div>
        <Banner />
      </section>
      <section className="translate-y-32">
        <Typography variant="h4">Banner page</Typography>
      </section>
    </main>
  );
}
